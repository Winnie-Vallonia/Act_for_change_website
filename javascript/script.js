document.addEventListener('DOMContentLoaded', function() {
    // Apply Now Button Feature
    const applyButton = document.querySelector('.btn-custom');
    if (applyButton) {
        const applyModalHTML = `
            <div class="modal fade" id="applyModal" tabindex="-1" aria-labelledby="applyModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="applyModalLabel">Apply Now</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="applyForm">
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" required>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="email" required>
                                </div>
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Phone Number</label>
                                    <input type="tel" class="form-control" id="phone" required>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', applyModalHTML);
        const applyModal = new bootstrap.Modal(document.getElementById('applyModal'));
        applyButton.addEventListener('click', function() {
            applyModal.show();
        });
        document.getElementById('applyForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            alert(`Thank you for applying, ${name}! We'll contact you soon at ${email} or ${phone}.`);
            applyModal.hide();
            document.getElementById('applyForm').reset();
        });
    }

    // Donate Button Feature
    const donateButtons = document.querySelectorAll('.btn-outline-light');
    if (donateButtons.length > 0) {
        const donateModalHTML = `
            <div class="modal fade" id="donateModal" tabindex="-1" aria-labelledby="donateModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="donateModalLabel">Donate</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="donateForm">
                                <div class="mb-3">
                                    <label for="donorName" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="donorName" required>
                                </div>
                                <div class="mb-3">
                                    <label for="donorEmail" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="donorEmail" required>
                                </div>
                                <div class="mb-3">
                                    <label for="amount" class="form-label">Amount</label>
                                    <input type="number" class="form-control" id="amount" required>
                                </div>
                                <button type="submit" class="btn btn-primary">Donate</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', donateModalHTML);
        const donateModal = new bootstrap.Modal(document.getElementById('donateModal'));

        donateButtons.forEach(button => {
            button.addEventListener('click', function() {
                donateModal.show();
            });
        });

        document.getElementById('donateForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const donorName = document.getElementById('donorName').value;
            const donorEmail = document.getElementById('donorEmail').value;
            const amount = document.getElementById('amount').value;
            alert(`Thank you for your donation, ${donorName}! We'll contact you soon at ${donorEmail} regarding your donation of $${amount}.`);
            donateModal.hide();
            document.getElementById('donateForm').reset();
        });
    }

    // Search Bar Functionality
    const searchForms = document.querySelectorAll('.searchForm'); // Select all forms with class 'searchForm'
    const searchInputs = document.querySelectorAll('.searchInput'); // Select all inputs with class 'searchInput'

    searchForms.forEach((form, index) => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const searchInput = searchInputs[index]; // Get the corresponding input for the form
            const query = searchInput.value.trim();

            if (query) {
                console.log(`Searching for: ${query}`);
                alert(`Searching for: ${query}`);
                searchInput.value = '';
            }
        });
    });
});
