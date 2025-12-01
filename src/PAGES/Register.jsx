const Register=()=>  {
return (
<div className="page-container">
<h1>Event Registration</h1>


<form className="card">
<label>Name:</label>
<input type="text" placeholder="Enter your name" />


<label>Email:</label>
<input type="email" placeholder="Enter your email" />


<label>Phone:</label>
<input type="text" placeholder="Enter phone number" />


<label>Game Choice:</label>
<input type="text" placeholder="RaOne / Football / RC Swipe" />


<button type="submit">Submit</button>
</form>
</div>
);
}
export default Register;