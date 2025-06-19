const Dynamiclist = ({list}) => {
    return (
        <div>
            <h2>Dynamic List</h2>
            <ol>
                {
                    list.map(list => {
                        return (
                            <li key={list}>{list}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}
export default Dynamiclist;