import style from '../styles/home.module.scss'
function LayoutCom(props) {
    const layoutContent = {
        width: '100%',
        height: '100%',
        background: '#fff',
        borderRadius: '4px',
    }
    function Tab() {
        return (
            <div className = { style.layout }>
                <div style = { layoutContent }>
                    { props.children }
                </div>
            </div>
        )
    }
    return (
        <Tab></Tab>
    )
}
export default LayoutCom
