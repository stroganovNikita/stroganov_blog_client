import Nav from '../partials/Nav/Nav';

function SignUp() {
    return (
        <>
        <Nav />
        <main>
            <form action="http://localhost:3000/posts" method="POST" enctype="multipart/form-data">

                <h2 class="signUpLogo">Registration</h2>
                <label for="firstName">First name</label>
                 <input type="text" id="firstName" name="firstName" maxlength="20" required />
                <label for="lastName">Last name</label>
                 <input type="text" id="lastName" name="lastName" maxlength="20"  required />
                <label for="nickName">Nickname</label>
                 <input type="nickName" id="nickName" name="nickName" maxlength="20"  required />
                <label for="password">Password</label>
                 <input type="password" id="password" name="password" maxlength="25" required />
                <label for="confPassword">Confirm password</label>
                 <input type="password" id="confPassword" name="confPassword" minlength="8" maxlength="25" required />
                <button type="submit">Sign up</button> 
            </form>
        </main>
        </>
    )
};

export default SignUp;