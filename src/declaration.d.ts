declare module '*.less' {
    const content: { [className: string]: any }
    export default content
}

interface Window {
    ActiveXObject: any
}
