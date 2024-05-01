// Check if user is authenticated
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser) {
    // User not authenticated, redirect to login page
    window.location.href = 'login.html';
}

// Sample user data (you might fetch this from a database)
const userData = {
    name: "John Doe",
    email: currentUser.email,
    profileImage: "default-profile-image.jpg", // Default profile image
    bio: "",
    dob: "",
    address: ""
};

// Display user information including profile image
function displayUserProfile() {
    const userProfileDiv = document.getElementById('userProfile');
    const profileImage = document.getElementById('profileImage');
    const userInfoDiv = document.getElementById('userInfo');

    // Display profile image
    profileImage.src = userData.profileImage;

    // Display user information
    userInfoDiv.innerHTML = `
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Bio:</strong> ${userData.bio}</p>
        <p><strong>Date of Birth:</strong> ${userData.dob}</p>
        <p><strong>Address:</strong> ${userData.address}</p>
    `;
}

// Display edit profile form
function displayEditProfileForm() {
    const editProfileFormDiv = document.getElementById('editProfileForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const bioInput = document.getElementById('bio');
    const dobInput = document.getElementById('dob');
    const addressInput = document.getElementById('address');

    nameInput.value = userData.name;
    emailInput.value = userData.email;
    bioInput.value = userData.bio;
    dobInput.value = userData.dob;
    addressInput.value = userData.address;

    editProfileFormDiv.style.display = 'block';
}

// Event listener for edit button
document.getElementById('editButton').addEventListener('click', function() {
    displayEditProfileForm();
});

// Event listener for edit form submission
document.getElementById('editForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Update user data (this is just a simulation, in real application you'd send this data to the server)
    userData.name = document.getElementById('name').value;
    userData.email = document.getElementById('email').value;
    userData.bio = document.getElementById('bio').value;
    userData.dob = document.getElementById('dob').value;
    userData.address = document.getElementById('address').value;

    // Update user profile display
    displayUserProfile();

    // Hide edit profile form
    document.getElementById('editProfileForm').style.display = 'none';
});

// Event listener for profile image upload
document.getElementById('profileImageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];

    // Check if file is selected
    if (file) {
        // Update profile image preview
        const profileImage = document.getElementById('profileImage');
        profileImage.src = URL.createObjectURL(file);

        // You might want to upload the image to the server here and update the userData.profileImage accordingly
    }
});

// Event listener for logout button
document.getElementById('logoutButton').addEventListener('click', function() {
    // Clear currentUser from localStorage
    localStorage.removeItem('currentUser');
    // Redirect to login page
    window.location.href = 'login.html';
});

// Initial display of user profile
displayUserProfile();
