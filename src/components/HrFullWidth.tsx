export default function HrFullWidth() {
    return (
        <hr
            className={`
              h-[2px] w-screen -translate-x-[calc((100vw-80rem)/2)] transform border-0 bg-current
            `}
        />
    );
}
