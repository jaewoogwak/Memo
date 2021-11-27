import Media from 'react-media';

const MEDIA_QUERIES = {
    pc: '(min-width : 120px)',
    mobile: '(max-width : 1199px)'
}

const Desktopmode = (props, context) => {
    return (
    <div id="middle" className={styles.middleback}>
        this is Desktop
    </div>);
}

const Mobilemode = (props, context) => {
    return (
        <div id ="middle" className = {styles.middleback2}>
            this is mobile
        </div>
    )
}

const test = (props, context) => {
    return (
        <div>
            <Media queries = {MEDIA_QUERIES}>
                {matches=> {
                    return (
                        <div>
                            {matches.pc && <Desktopmode/>}
                            {matches.mobile && <Mobilemode/>}
                        </div>
                    )
                }}
            </Media>
        </div>
    )
}

export default test;