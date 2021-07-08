import React, { FunctionComponent, useEffect, useMemo, useState } from 'react'
import InfiniteLoader from 'react-window-infinite-loader'
import { FixedSizeGrid } from 'react-window'
import { AutoSizer } from 'react-virtualized'
import { GridItemRenderer } from './components/GridItem'

interface AppProps {
    address: string
    gutter?: number
    padding?: number
}

const getColumnsFromWidth = (width: number): number => {
    if (width > 950) {
        return 3
    }
    if (width < 950 && width > 700) {
        return 2
    }
    return 1
}

const InfiniteNFT: FunctionComponent<AppProps> = ({
    address,
    gutter = 120,
    padding = 8,
}) => {
    const [offset, setOffset] = useState<number>(0)

    const url = useMemo(
        (): string =>
            `https://api.opensea.io/api/v1/assets?exclude_currencies=true&owner=${address}&limit=20&offset=${offset}`,
        [address, offset]
    )

    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetch(url).then((res) =>
            res.json().then((d) => {
                setData((prevData: any) => [...prevData, ...d.assets])
                setLoading(false)
            })
        )
    }, [setData, setLoading, offset])

    if (loading) {
        return <div>...</div>
    }

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <AutoSizer>
                {({ width, height }) => (
                    <InfiniteLoader
                        itemCount={2000}
                        isItemLoaded={(index) => !!data[index]}
                        loadMoreItems={async (startIndex) =>
                            setOffset(startIndex)
                        }
                    >
                        {({ onItemsRendered, ref }) => {
                            const columns: number = getColumnsFromWidth(width)
                            const rows: number = Math.ceil(
                                data.length / columns
                            )

                            const squareDim: number =
                                (width - gutter - padding * 2) / columns
                            const totalRowHeight: number =
                                squareDim * rows + gutter + padding * 2

                            return (
                                <FixedSizeGrid
                                    ref={ref}
                                    onItemsRendered={(args) =>
                                        onItemsRendered({
                                            overscanStartIndex:
                                                args.overscanRowStartIndex *
                                                columns,
                                            overscanStopIndex:
                                                args.overscanRowStopIndex *
                                                columns,
                                            visibleStartIndex:
                                                args.visibleRowStartIndex *
                                                columns,
                                            visibleStopIndex:
                                                args.visibleRowStopIndex *
                                                columns,
                                        })
                                    }
                                    width={width}
                                    height={
                                        totalRowHeight < height
                                            ? totalRowHeight
                                            : height
                                    }
                                    columnCount={columns}
                                    columnWidth={squareDim}
                                    rowCount={rows}
                                    rowHeight={squareDim}
                                >
                                    {GridItemRenderer(
                                        data,
                                        columns,
                                        gutter,
                                        padding
                                    )}
                                </FixedSizeGrid>
                            )
                        }}
                    </InfiniteLoader>
                )}
            </AutoSizer>
        </div>
    )
}

export default InfiniteNFT
