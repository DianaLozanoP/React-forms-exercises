import { fireEvent, render } from '@testing-library/react'
import TodoList from "./TodoList"

test("it renders without crashing", () => {
    render(<TodoList />)
})

test("matches snapshot", () => {
    const { asFragment } = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot();
})

test("should add a new activity to the list", () => {
    const { getByLabelText, container, getByText } = render(<TodoList />)
    const input = getByLabelText("Enter a new to do")
    const btn = getByText("Add it")
    const ul = container.querySelector('ul')
    fireEvent.change(input, { target: { value: "Fill taxes" } })
    fireEvent.click(btn)
    expect(ul).toHaveTextContent('Fill taxes')
})