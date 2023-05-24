<nav class="navbar navbar-vertical navbar-expand-xl navbar-light navbar-glass perfect-scrollbar scrollbar">
    <a class="navbar-brand text-left" href="../index.html">
        <div class="d-flex align-items-center py-3">
            <img class="mr-2" src="{{ asset('img/logo/falcon.png') }}" alt="" width="40"/>
            <span class="text-sans-serif">falcon</span>
        </div>
    </a>

    <div class="collapse navbar-collapse perfect-scrollbar scrollbar" id="navbarVerticalCollapse">
        <ul class="navbar-nav flex-column">
            <li class="nav-item">
                <a class="nav-link dropdown-indicator" href="#home" data-toggle="collapse"
                   role="button" aria-expanded="false" aria-controls="home">
                    <div class="d-flex align-items-center">
                                <span class="nav-link-icon">
                                    <span class="fas fa-chart-pie"></span>
                                </span>
                        <span>Home</span>
                    </div>
                </a>
                <ul class="nav collapse" id="home" data-parent="#navbarVerticalCollapse">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Dashboard alt</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Feed</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Landing</a>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link dropdown-indicator" href="#" data-toggle="collapse"
                   role="button" aria-expanded="false" aria-controls="pages">
                    <div class="d-flex align-items-center">
                        <span class="nav-link-icon">
                            <span class="fas fa-copy"></span>
                        </span>
                        <span>Pages</span>
                    </div>
                </a>
                <ul class="nav collapse" id="pages" data-parent="#navbarVerticalCollapse">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Activity</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Associations</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Billing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Customer details</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Event detail</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Event create</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Faq</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Invoice</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Invite people</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Notifications</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">People</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing alt</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Settings</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Starter</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-indicator" href="#pages-errors" data-toggle="collapse" role="button"
                           aria-expanded="false" aria-controls="pages-errors">Errors</a>
                        <ul class="nav collapse" id="pages-errors">
                            <li class="nav-item">
                                <a class="nav-link" href="../pages/errors/404.html">404</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../pages/errors/500.html">500</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="nav-item"><a class="nav-link" href="#">
                    <div class="d-flex align-items-center">
                        <span class="nav-link-icon">
                            <span class="fas fa-comments"></span>
                        </span>
                        <span>Chat</span>
                    </div>
                </a></li>
            <li class="nav-item">
                <a class="nav-link dropdown-indicator" href="#email" data-toggle="collapse" role="button"
                   aria-expanded="false" aria-controls="email">
                    <div class="d-flex align-items-center">
                        <span class="nav-link-icon">
                            <span class="fas fa-envelope-open"></span>
                        </span>
                        <span>Email</span>
                        <span class="badge badge-pill ml-2 badge-soft-success"></span>
                    </div>
                </a>
                <ul class="nav collapse" id="email" data-parent="#navbarVerticalCollapse">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Inbox</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href=".#">Email detail</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Compose</a>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link dropdown-indicator" href="#authentication" data-toggle="collapse" role="button"
                   aria-expanded="false" aria-controls="authentication">
                    <div class="d-flex align-items-center">
                        <span class="nav-link-icon">
                            <span class="fas fa-unlock-alt"></span>
                        </span>
                        <span>Authentication</span>
                    </div>
                </a>
                <ul class="nav collapse" id="authentication" data-parent="#navbarVerticalCollapse">
                    <li class="nav-item">
                        <a class="nav-link dropdown-indicator" href="#authentication-basic" data-toggle="collapse"
                           role="button" aria-expanded="false" aria-controls="authentication-basic">Basic</a>
                        <ul class="nav collapse" id="authentication-basic">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Logout</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Register</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Forgot
                                    password</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Reset password </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Confirm mail</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Lock screen</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-indicator" href="#authentication-card" data-toggle="collapse"
                           role="button" aria-expanded="false" aria-controls="authentication-card">Card</a>
                        <ul class="nav collapse" id="authentication-card">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Logout</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Register</a>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="#">Forgot
                                    password</a>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="#">Reset
                                    password</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Confirm mail</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Lock screen</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-indicator" href="#authentication-split"
                           data-toggle="collapse" role="button" aria-expanded="false"
                           aria-controls="authentication-split">Split</a>
                        <ul class="nav collapse" id="authentication-split">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Logout</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Register</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Forgot
                                    password</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Reset
                                    password</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Confirm email</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Lock screen</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Wizard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#!" data-toggle="modal" data-target="#authentication-modal">In
                            Modal</a></li>
                </ul>
            </li>
            <li class="nav-item"><a class="nav-link dropdown-indicator" href="#e-commerce"
                                    data-toggle="collapse" role="button" aria-expanded="true"
                                    aria-controls="e-commerce">
                    <div class="d-flex align-items-center">
                        <span class="nav-link-icon">
                            <span class="fas fa-cart-plus"></span>
                        </span>
                        <span>E commerce</span>
                    </div>
                </a>
                <ul class="nav collapse show" id="e-commerce" data-parent="#navbarVerticalCollapse">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Product list</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Product grid</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Product details</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Orders</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Order details</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Customers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Shopping cart</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Checkout</a>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="px-3 px-xl-0">
            <hr class="border-300 my-2"/>
        </div>
        <ul class="navbar-nav flex-column">
            <li class="nav-item"><a class="nav-link dropdown-indicator" href="#components"
                                    data-toggle="collapse" role="button" aria-expanded="false"
                                    aria-controls="components">
                    <div class="d-flex align-items-center">
                        <span class="nav-link-icon">
                            <span class="fas fa-puzzle-piece"></span>
                        </span>
                        <span>Components</span>
                    </div>
                </a>
                <ul class="nav collapse" id="components" data-parent="#navbarVerticalCollapse">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Accordion</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Alerts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Avatar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Background</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Badges</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Breadcrumb</a>
                    </li>
                    <li class="nav-item">

                        <a class="nav-link" href="#">Bulk select</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Buttons</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Cards</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Carousel</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Collapse</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Countup</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Dropdowns</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Fancyscroll</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Fancytab</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Forms</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Hoverbox</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">List group</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Modals</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Media object</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Navs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Navbar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Page headers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pagination</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Popovers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Progress</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Scrollspy</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Spinners</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tables</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tabs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Toasts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tooltips</a>
                    </li>
                </ul>
            </li>
            <li class="nav-item"><a class="nav-link dropdown-indicator" href="#utilities" data-toggle="collapse"
                                    role="button" aria-expanded="false" aria-controls="utilities">
                    <div class="d-flex align-items-center">
                        <span class="nav-link-icon">
                            <span class="fab fa-hotjar"></span>
                        </span>
                        ¬<span>Utilities</span>
                    </div>
                </a>
                <ul class="nav collapse" id="utilities" data-parent="#navbarVerticalCollapse">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Borders</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#l">Clearfix</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Close icon</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Colors</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Display</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Embed</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Figures</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Flex</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Grid</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sizing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Spacing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Stretched link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Typography</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Vertical align</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Visibility</a>
                    </li>
                </ul>
            </li>
            <li class="nav-item"><a class="nav-link dropdown-indicator" href="#plugins" data-toggle="collapse"
                                    role="button" aria-expanded="false" aria-controls="plugins">
                    <div class="d-flex align-items-center">
                        <span class="nav-link-icon">
                            <span class="fas fa-plug"></span>
                        </span>
                        <span>Plugins</span>
                    </div>
                </a>
                <ul class="nav collapse" id="plugins" data-parent="#navbarVerticalCollapse">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Bootstrap wizard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Charts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Countdown</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Data table</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Date picker</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Dropzone</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Echarts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Emojionearea</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Fancybox</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Fontawesome</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Google map</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Inline player</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Jquery validation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Leaflet</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Lightbox</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Lottie</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Toastr</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Owl carousel</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Perfect scrollbar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Progressbar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Raty</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Select2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tinymce</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Typed text</a>
                    </li>
                </ul>
            </li>
            <li class="nav-item"><a class="nav-link dropdown-indicator" href="#documentation"
                                    data-toggle="collapse" role="button" aria-expanded="false"
                                    aria-controls="documentation">
                    <div class="d-flex align-items-center">
                        <span class="nav-link-icon">
                            <span class="fas fa-book"></span>
                        </span>
                        <span>Documentation</span>
                    </div>
                </a>
                <ul class="nav collapse" id="documentation" data-parent="#navbarVerticalCollapse">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Getting started</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#l">File structure</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Customization</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Dark mode</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Fluidlayout</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Gulp</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">RTL</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Plugins</a>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="px-3 px-xl-0">
            <hr class="border-300 my-2"/>
        </div>
        <ul class="navbar-nav flex-column">
            <li class="nav-item">
                <a class="nav-link" href="../changelog.html">
                    <div class="d-flex align-items-center">
                        <span class="nav-link-icon">
                            <span class="fas fa-code-branch"></span>
                        </span>
                        <span>Changelog</span>
                        <span class="badge badge-pill ml-2 badge-soft-primary">v2.2.0</span>
                    </div>
                </a>
            </li>

        </ul>
        <div class="px-3 px-xl-0">
            <hr class="border-300 my-3"/>
            <h6>Settings</h6>
            <div class="bg-light border rounded p-3">
                <div class="custom-checkbox custom-control">
                    <input class="custom-control-input" id="dark" type="checkbox" name="dark"
                           data-home-url="../index.html" data-url="../documentation/dark-mode.html"/>
                    <label class="custom-control-label" for="dark">Dark Mode</label>
                </div>
                <div class="custom-checkbox custom-control">
                    <input class="custom-control-input" id="rtl" type="checkbox" name="rtl"
                           data-home-url="../index.html" data-url="../documentation/RTL.html"/>
                    <label class="custom-control-label" for="rtl">RTL Layout</label>
                </div>
                <div class="custom-checkbox custom-control">
                    <input class="custom-control-input" id="fluid" type="checkbox" name="fluid"
                           data-home-url="../index.html" data-url="../documentation/fluid-layout.html"/>
                    <label class="custom-control-label" for="fluid">Fluid Container</label>
                </div>
            </div>
        </div>
        <a class="btn btn-primary btn-sm btn-block my-3"
           href="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template/">
            Purchase</a>
    </div>
</nav>
