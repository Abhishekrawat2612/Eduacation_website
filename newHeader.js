function newHeader(){
    return `
    <header class="header rs-nav">
		<div class="top-bar">
			<div class="container">
				<div class="row d-flex justify-content-between">
					<div class="topbar-left">
						<ul>
							<li><strong><i class="fa fa-envelope-o"></i>info@practicalconcept.in</strong></li>
						</ul>
					</div>
					<div class="topbar-right">
						<ul>
							<li><i class="fa fa-phone"> <strong> 089-29144429</strong></i></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="sticky-header navbar-expand-lg">
            <div class="menu-bar clearfix">
                <div class="container clearfix">
					<div class="menu-logo">
						<a href="index.html"><img src="assets/images/for white bg-2.png" alt="logoImage"></a>
					</div>
                    <button class="navbar-toggler collapsed menuicon justify-content-end" type="button" data-toggle="collapse" data-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span></span>
						<span></span>
						<span></span>
					</button>
                    <div class="secondary-menu">
                        <div class="secondary-inner">
                            <ul>
								<li><a href="https://www.facebook.com/practicalconceptcourse/" class="btn-link"><i class="fa fa-facebook"></i></a></li>
								<li><a href="https://in.linkedin.com/company/practical-concept" class="btn-link"><i class="fa fa-linkedin"></i></a></li>
								
							</ul>
						</div>
                    </div>
                    <div class="nav-search-bar">
                        <form action="#">
                            <input name="search" value="" type="text" class="form-control" placeholder="Type to search">
                            <span><i class="ti-search"></i></span>
                        </form>
						<span id="search-remove"><i class="ti-close"></i></span>
                    </div>
                    <div class="menu-links navbar-collapse collapse justify-content-start" id="menuDropdown">
						<div class="menu-logo">
							<a href="index.html"><img src="assets/images/for white bg-2.png" alt=""></a>
						</div>
                        <ul class="nav navbar-nav">	
							<li><a href="./index.html">Home</a></li>
							
							<li><a href="./about.html">About Us</a></li>
								<li><a href="javascript:;">Our Courses<i class="fa fa-chevron-down"></i></a>
								<ul class="sub-menu">
									<li>
										<a href="./our-cources-subpages/it-programs.html">IT PROGRAMS </a>	
									</li>
									<li>
										<a href="./our-cources-subpages/defence-program.html">DEFENCE PROGRAM </a>
									</li>
											
								</ul>
							</li>
						
							<li><a href="javascript:;">Assistance<i class="fa fa-chevron-down"></i></a>
								<ul class="sub-menu">
									<li><a href="./academic-writing.html">Academice/Thesis Writing</a></li>
									<li><a href="./project-assistance.html">Project Assistance</a></li>
									<li><a href="./job-assistance.html">Job Assistance</a></li>	
								</ul>
							</li>

							<li><a href="./resourceSubPages/suggestedReading.html">Resources<i class="fa fa-chevron-down"></i></a>
								<ul class="sub-menu">
									<li><a href="./resourceSubPages/suggestedReading.html">Suggested Reading</a></li>
								</ul>
							</li>
							<li><a href="./contact.html">Contact</a></li>
						</ul>
						<div class="nav-social-link">
							<li><a href="https://www.facebook.com/practicalconceptcourse/" class="btn-link"><i class="fa fa-facebook"></i></a></li>
								<li><a href="https://in.linkedin.com/company/practical-concept" class="btn-link"><i class="fa fa-linkedin"></i></a></li>
						</div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    `
}

export default newHeader;