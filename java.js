document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseover', function() {
        document.querySelector('.nav-link.active').classList.remove('active');
        this.classList.add('active');
    });
});

window.addEventListener('scroll', function() {
    const scrollNavbar = document.getElementById('scrollNavbar');
    if (window.scrollY > 500) 
        scrollNavbar.classList.remove('d-none');
   
});
window.addEventListener('scroll', function() {
    const scrollNavbar = document.getElementById('scrollNavbar');
    if (window.scrollY < 200) 
        scrollNavbar.classList.add('d-none');
   
});


function goToRegister() {
    window.location.href = "register.html";
}
function goToLogin() {
    window.location.href = "login.html";
}
function goToUser() {
    window.location.href = "user.html";
}

        function registerUser(event) {
            event.preventDefault(); 
        
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
        
           
            const user = {
                name: name,
                email: email,
                phone: phone,
                password: password
            };
        
            
            localStorage.setItem('registeredUser', JSON.stringify(user));
        
         
            goToLogin();
        }

        
        function loginUser(event) {
            event.preventDefault(); 
        
           
            const email = document.getElementById('email-log').value;
            const password = document.getElementById('password-log').value;
        
         
            const storedUser = JSON.parse(localStorage.getItem('registeredUser'));
        
           
            if (storedUser && storedUser.email === email && storedUser.password === password) {
              
                localStorage.setItem('currentUser', JSON.stringify(storedUser));
        
               
                goToUser();
            } else {
                alert('Invalid email or password');
            }
        }

        
        function checkLogin(event) {
            event.preventDefault(); 
        
          
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
            if (currentUser) {
               
                window.location.href = "user.html";
            } else {
              
                alert('Please log in first.');
                window.location.href = "login.html";
            }
        }

        

        document.addEventListener('DOMContentLoaded', function() {
            const saveButtons = document.querySelectorAll('.modal-footer .btn-primary');
        
            saveButtons.forEach(button => {
                button.addEventListener('click', function(event) {
                    const modal = event.target.closest('.modal');
                    const doctorName = modal.querySelector('.modal-title').textContent;
                    const selectedTimeSlot = modal.querySelector('input[name="timeSlot"]:checked');
        
                    if (selectedTimeSlot) {
                        
                        const appointment = {
                            doctor: doctorName,
                            time: selectedTimeSlot.value
                        };
        
                     
                        let userAppointments = JSON.parse(localStorage.getItem('userAppointments')) || [];
                        userAppointments.push(appointment);
        
                       
                        localStorage.setItem('userAppointments', JSON.stringify(userAppointments));
        
                      
                        const modalInstance = bootstrap.Modal.getInstance(modal);
                        modalInstance.hide();
        
                        window.location.href = 'user.html';
                    } else {
                        alert('Please select a time slot.');
                    }
                });
            });
        });
        
        