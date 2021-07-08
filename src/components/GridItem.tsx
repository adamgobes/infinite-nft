import { FunctionComponent } from 'react'

interface GridItemProps {
    columnIndex: number
    rowIndex: number
    style: any
}

type GridItemRendererType = (
    data: any,
    columns: number,
    gutter: number,
    padding: number
) => FunctionComponent<GridItemProps>

export const GridItemRenderer: GridItemRendererType =
    (data, columns, gutter, padding) =>
    ({ columnIndex, rowIndex, style }) => {
        const index = columns * rowIndex + columnIndex

        if (index >= data.length) {
            return null
        }

        const item: any = data[index]

        return (
            <div
                style={{
                    ...style,
                    top: style.top + gutter + padding,
                    left: style.left + gutter + padding,
                    width: style.width - gutter,
                    height: style.height - gutter,
                }}
            >
                <img
                    src={item.image_preview_url}
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        borderRadius: '30px',
                        boxShadow: 'rgb(37 41 46 / 20%) 0px 10px 30px',
                    }}
                />
            </div>
        )
    }
