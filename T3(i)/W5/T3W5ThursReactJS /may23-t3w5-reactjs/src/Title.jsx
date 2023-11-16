export default function Title (props) {
    return (
    <>
        <h1>The Fruit App!</h1>
        {
            props.loggedInUser ?
            <h3>Navbar with my account option</h3>
            :
            <h3>Navbar with login & sign up option</h3>
        }
        
    </>

    )
}