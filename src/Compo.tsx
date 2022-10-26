import { FunctionComponent } from "react";

interface CompoProps {
    name: string;
}

const Compo: FunctionComponent<CompoProps> = ({ name }) => {
    return (
        <div>compo, { name }</div>
    )
}

export default Compo;