function AccessCard() {
    return (
        // CARD CONTAINER
        <div style={{
            // backgroundColor: 'red',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '2.5em',
            width: '100%',
            color: 'white',
        }}>

            {/* LEFT SIDE / CIRCLE / IMG  */}
            <div style={{
                width: '10%',
                // backgroundColor: 'blue',
                height: '100%',
            }}>
                {/* <img src="" alt="" /> */}
                <div style={{
                    backgroundColor: 'gray',
                    height: '100%',
                    borderRadius: '50%'
                }}></div>
            </div>

            {/* CENTER SIDE / NAME / ID  */}
            <div style={{
                width: '78%',
                // backgroundColor: 'teal',
                height: '100%',
                padding: '0 .2em 0 .35em',
            }}>
                <div style={{
                    width: '100%',
                    height: '50%',
                    // backgroundColor: 'yellow',
                    overflow: 'hidden',
                }}>
                    <p style={{
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                    }}>ABRAHAM EMMANUEL GONZALEZ RINCON</p>
                </div>
                <div style={{
                    display: 'flex',
                    gap: '1em',
                    width: '100%',
                    height: '50%',
                    // backgroundColor: 'orange',
                }}>
                    <p>221768626</p>
                    <p>6A1BTW</p>
                </div>
            </div>

            {/* RIGHT SIDE / TIME / ESTATUS  */}
            <div style={{
                width: '12%',
                // backgroundColor: 'blue',
                height: '100%',
                padding: '.2em',
            }}>
                <div style={{
                    backgroundColor: 'gray',
                    height: '50%',
                    width: '100%',
                }}></div>
                <div style={{
                    backgroundColor: 'teal',
                    height: '50%',
                    width: '100%',
                }}></div>
            </div>
        </div>
    )
}
export default AccessCard