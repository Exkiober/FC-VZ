import { Button } from "../components/ui/button";


const TestButton = () => {
    return (
        <Button onClick={() => console.log("Button clicked")}>
            Test
        </Button>
    )
}

export default TestButton;