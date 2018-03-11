<?php $currentPage = 'contact'; ?>
<?php require("include/header.php"); ?>

<!-- Contact Banner -->
<section class="contact-banner banner-centered-text" data-type="background" data-speed="5">
	<div class="container-fluid p-0 text-white banner-section">
		<div class="row no-gutters">
			<div class="col-md-12 text-center">
				<div>
					<h2 class="display-4 ml15">
			          	<span class="word">Get</span>
			          	<span class="word">In</span>
			          	<span class="word">Touch</span>
			        </h2>
					<p>CONTACT US</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Contact Form Section -->
<section class="contact-form main-bg" id="contact">
	<div class="container-fluid text-white">
		<div class="row">
			<div class="col-md-1"></div>
			<div class="col-md-5 py-5 text-center form-text banner-centered-text">
				<div class="banner-section">
					<h2>Let’s Start Now!</h2>
					<p>WE ARE READY FOR NEXT PROJECT</p>
					<p>Proin at nunc erat. Proin imperdiet ex ante, in aliquam massa pellentesque gravida. Donec fermentum commodo elit, consectetur ultricies magna laoreet quis. Aliquam sit amet interdum ipsum. Vestibulum sagittis ipsum mauris, vel tincidunt ligula vestibulum in.</p>
					<address>
						<strong>Main Office: </strong>123 Elm St. New York City, NY 111111<br>
						<strong>Phone: </strong>1.555.555.5555<br>
						<strong>Email: </strong>info@yourdomain.com<br>
					</address>
				</div>
			</div>
			<div class="col-md-5 sec-bg py-5">
				<div id="form-messages"></div>
				<form id="ajax-contact" method="post" action="mailer.php">
					<div class="form-group py-3">
						<label">Your Name (required)</label>
						<input id="name" type="text" name="name" class="form-control required">
					</div>
					<div class="form-group py-3">
						<label">Your Email (required)</label>
						<input id="email" type="email" name="email" class="form-control required">
					</div>
					<div class="form-group py-3">
						<label">Subject (required)</label>
						<input id="subject" type="text" name="subject" class="form-control required">
					</div>
					<div class="form-group py-3">
						<label">Your Message</label>
						<textarea id="message" type="text" name="message" class="form-control"></textarea>
					</div>
					<div class="form-group py-3">
						<button class="btn btn-outline-light btn-block btn-lg">Get In Touch</button>
					</div>
				</form>
			</div>
			<div class="col-md-1"></div>
		</div>
	</div>
</section>

<!-- Map Section -->
<section class="map sec-bg">
	<div class="container-fluid p-0 py-5 reveal-item waypoint">
		<div class="row no-gutters">
			<div class="col-md-12 text-center">
				<div class="videoWrapper">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.1462321228564!2d2.318560515462868!3d48.87448880752741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fcaff75601b%3A0x3b133236265f17d!2sParis+Fashion+Outlet!5e0!3m2!1sen!2sin!4v1520759824819" width="1400" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>
				</div>
			</div>
		</div>
	</div>
</section>

<?php require("include/footer.php"); ?>

