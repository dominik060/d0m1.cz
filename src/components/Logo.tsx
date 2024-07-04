type Props = Readonly<{
    [prop: string]: any;
}>;

export default function Logo(props: Props) {
    return (
        <svg
            data-logo-component
            viewBox="0 0 100 100"
            version="1.1"
            id="svg1"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 bg-red-50"
            {...props}
        >
            <title id="title1">logo-db</title>

            <defs id="defs1" />
            <g id="layer1" className="w-16 bg-red-50 fill-current">
                <path
                    id="path11"
                    // style="fill:#09090b;fill-opacity:1;stroke-width:0.461937"
                    d="M 70,0 V 29.999717 H 99.999726 A 30,30 0 0 0 70,0 Z"
                />
                <rect
                    // style="fill:#09090b;fill-opacity:1;stroke-width:0.694679"
                    id="rect11"
                    width="30"
                    height="30"
                    x="35"
                    y="0"
                />
                <path
                    id="path1"
                    // style="fill:#09090b;fill-opacity:1;stroke-width:0.461937"
                    d="M 29.999726,0 V 29.999717 H 0 A 30,30 0 0 1 29.999726,0 Z"
                />
                <rect
                    // style="fill:#09090b;fill-opacity:1;stroke-width:0.694679"
                    id="rect1"
                    width="30"
                    height="30"
                    x="35"
                    y="70"
                />
                <rect
                    // style="fill:#09090b;fill-opacity:1;stroke-width:0.694679"
                    id="rect2"
                    width="30"
                    height="30"
                    x="35"
                    y="35"
                />
                <path
                    id="path2"
                    // style="fill:#09090b;fill-opacity:1;stroke-width:0.461937"
                    d="M 70,64.999717 V 35 H 99.999726 A 30,30 0 0 1 70,64.999717 Z"
                />
                <path
                    id="path3"
                    // style="fill:#09090b;fill-opacity:1;stroke-width:0.461937"
                    d="M 29.999726,64.999717 V 35 H 0 a 30,30 0 0 0 29.999726,29.999717 z"
                />
            </g>
        </svg>
    );
}
