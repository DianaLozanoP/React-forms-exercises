import { fireEvent, render } from '@testing-library/react'
import BoxList from './BoxList'

test("it renders without crashing", () => {
    render(<BoxList />)
})

test("matches snapshot", () => {
    const { asFragment } = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot();
})

test("should add new box", () => {
    const { getByLabelText, container, getByText } = render(<BoxList />)
    const inputColor = getByLabelText("Background Color")
    const inputWidth = getByLabelText("Width")
    const inputHeight = getByLabelText("Height")
    const btn = getByText("Add Box")
    const ul = container.querySelector('ul')
    fireEvent.change(inputColor, { target: { value: "Purple" } })
    fireEvent.change(inputWidth, { target: { value: "200px" } })
    fireEvent.change(inputHeight, { target: { value: "400px" } })
    fireEvent.click(btn);
    expect(ul).toContainHTML(`<ul><div style="background-color: pink; width: 80px; height: 80px; position: relative; margin-bottom: 10px;"><button style="position: absolute; top: 0px; right: -25px;">X</button></div><div style="background-color: Purple; width: 200px; height: 400px; position: relative; margin-bottom: 10px;"><button style="position: absolute; top: 0px; right: -25px;">X</button></div></ul>`)
})