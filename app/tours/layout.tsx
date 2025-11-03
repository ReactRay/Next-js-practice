
function layout({ children }: { children: React.ReactNode }) {
    return (<>

        <header className="rounded py-2 w-1/2 bg-slate-500 mb-4 ">
            <h1 className="text-3xl text-white text-center">Nested Layout</h1>

        </header>
        {children}
    </>

    )
}

export default layout
