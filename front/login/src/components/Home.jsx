// import Swal from 'sweetalert2'



const Home = () => {
    const handleLogout = () => {
        sessionStorage.removeItem('token');
        location.reload();
    }

    return (
        <>
            <h1>User Logued....</h1>

            {
                alert("User Loged...!!")
            }

            <button onClick={handleLogout}>Logout</button>
        </>

    );
}

export default Home;