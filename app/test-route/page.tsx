import {TestComponent} from "@/components/test-component";

export const metadata = {
    title: "test"
}

export default function test () {
    return <div>
        <p>This is another test</p>
        <TestComponent />
    </div>
}