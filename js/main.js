document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    if (footer) { footer.innerHTML = `<div class="container"><div class="row g-4"><div class="col-lg-5"><h5>APSIS</h5><p class="mt-3">Army Public School for International Studies, Hyderabad. A community committed to purposeful learning, character and student development.</p></div><div class="col-6 col-lg-2"><h5>Quick Links</h5><a href="index.html">Home</a><a href="about.html">About Us</a><a href="academics.html">Academics</a><a href="faculty.html">Faculty</a></div><div class="col-6 col-lg-2"><h5>Explore</h5><a href="gallery.html">Gallery</a><a href="contact.html">Contact</a></div><div class="col-lg-3"><h5>Contact</h5><p class="mt-3 mb-1"><i class="bi bi-envelope me-2"></i>info.apsishyd@gmail.com</p><p><i class="bi bi-telephone me-2"></i>0319-3709706</p></div></div><div class="footer-bottom d-flex justify-content-between flex-wrap gap-2"><span>© ${new Date().getFullYear()} APSIS Hyderabad. All rights reserved.</span><span>apsishyd.edu.pk</span></div></div>` }
});

function submitEnquiry(e) {
    e.preventDefault();
    alert('Thank you. This static form is ready to be connected to an email service.');
    e.target.reset();
    returnfalse;
}