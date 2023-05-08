@extends('layouts.main')

@section('title', 'Dashboard')

@section('content')
    {{--    <h1>Dashboard</h1>--}}
    {{--    <!-- Thêm các thành phần của dashboard vào đây -->--}}
    {{--    @if (Auth::check())--}}
    {{--        <p>Hello, {{ Auth::user()->name }}</p>--}}
    {{--    @endif--}}
    <nav class="navbar navbar-light navbar-glass fs--1 font-weight-semi-bold row navbar-top sticky-kit navbar-expand">
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                data-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse"
                aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand text-left ml-3" href="../index.html">
            <div class="d-flex align-items-center">
                <img class="mr-2" src="../assets/img/illustrations/falcon.png" alt="" width="40"/>
                <span class="text-sans-serif">falcon</span>
            </div>
        </a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown1">
            <ul class="navbar-nav align-items-center d-none d-lg-block">
                <li class="nav-item">
                    <form class="form-inline search-box">
                        <input class="form-control rounded-pill search-input" type="search" placeholder="Search..."
                               aria-label="Search"/>
                        <span class="position-absolute fas fa-search text-400 search-box-icon"></span>
                    </form>
                </li>
            </ul>
            <ul class="navbar-nav align-items-center ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link px-0" href="../e-commerce/shopping-cart.html">
                        <span class="fas fa-cart-plus fs-4" data-fa-transform="shrink-7"></span>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link unread-indicator px-0" id="navbarDropdownNotification" href="#" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="fas fa-bell fs-4" data-fa-transform="shrink-6"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-card"
                         aria-labelledby="navbarDropdownNotification">
                        <div class="card card-notification shadow-none" style="max-width: 20rem">
                            <div class="card-header">
                                <div class="row justify-content-between align-items-center">
                                    <div class="col-auto">
                                        <h6 class="card-header-title mb-0">Notifications</h6>
                                    </div>
                                    <div class="col-auto">
                                        <a class="card-link font-weight-normal" href="#">Mark all as read</a>
                                    </div>
                                </div>
                            </div>
                            <div class="list-group list-group-flush font-weight-normal fs--1">
                                <div class="list-group-title">NEW</div>
                                <div class="list-group-item">
                                    <a class="notification notification-flush bg-200" href="#!">
                                        <div class="notification-avatar">
                                            <div class="avatar avatar-2xl mr-3">
                                                <img class="rounded-circle" src="../assets/img/team/1-thumb.png"
                                                     alt=""/>
                                            </div>
                                        </div>
                                        <div class="notification-body">
                                            <p class="mb-1"><strong>Emma Watson</strong> replied to your comment :
                                                "Hello world 😍"</p>
                                            <span class="notification-time">
                                            <span class="mr-1" role="img" aria-label="Emoji">💬</span>Just now
                                        </span>
                                        </div>
                                    </a>

                                </div>
                                <div class="list-group-item">
                                    <a class="notification notification-flush bg-200" href="#!">
                                        <div class="notification-avatar">
                                            <div class="avatar avatar-2xl mr-3">
                                                <div class="avatar-name rounded-circle">
                                                    <span>AB</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="notification-body">
                                            <p class="mb-1">
                                                <strong>Albert Brooks</strong> reacted to
                                                <strong>Mia Khalifa's</strong> status
                                            </p>
                                            <span class="notification-time">
                                                <span class="mr-1 fab fa-gratipay text-danger"></span>9hr
                                            </span>
                                        </div>
                                    </a>

                                </div>
                                <div class="list-group-title">EARLIER</div>
                                <div class="list-group-item">
                                    <a class="notification notification-flush" href="#!">
                                        <div class="notification-avatar">
                                            <div class="avatar avatar-2xl mr-3">
                                                <img class="rounded-circle" src="../assets/img/icons/weather-sm.jpg"
                                                     alt=""/>
                                            </div>
                                        </div>
                                        <div class="notification-body">
                                            <p class="mb-1">The forecast today shows a low of 20&#8451; in California.
                                                See today's weather.</p>
                                            <span class="notification-time">
                                                <span class="mr-1" role="img" aria-label="Emoji">🌤️</span>1d
                                            </span>
                                        </div>
                                    </a>

                                </div>
                            </div>
                            <div class="card-footer text-center border-top-0">
                                <a class="card-link d-block" href="#">View all</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link pr-0" id="navbarDropdownUser" href="#" role="button" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                        <div class="avatar avatar-xl">
                            <img class="rounded-circle" src="../assets/img/team/3-thumb.png" alt=""/>

                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right py-0" aria-labelledby="navbarDropdownUser">
                        <div class="bg-white rounded-soft py-2">
                            <a class="dropdown-item font-weight-bold text-warning" href="#!">
                                <span class="fas fa-crown mr-1"></span>
                                <span>Go Pro</span>
                            </a>

                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#!">Set status</a>
                            <a class="dropdown-item" href="#!">Profile &amp; account</a>
                            <a class="dropdown-item" href="#!">Feedback</a>

                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Settings</a>
                            <a class="dropdown-item" href="#">Logout</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    <div class="card">
        <div class="card-header">
            <div class="row align-items-center justify-content-between">
                <div class="col-4 col-sm-auto d-flex align-items-center pr-0">
                    <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0">Customers</h5>
                </div>
                <div class="col-8 col-sm-auto text-right pl-2">
                    <div class="d-none" id="customers-actions">
                        <div class="input-group input-group-sm">
                            <select class="custom-select cus" aria-label="Bulk actions">
                                <option selected="">Bulk actions</option>
                                <option value="Delete">Delete</option>
                                <option value="Archive">Archive</option>
                            </select>
                            <button class="btn btn-falcon-default btn-sm ml-2" type="button">Apply</button>
                        </div>
                    </div>
                    <div id="dashboard-actions">
                        <button class="btn btn-falcon-default btn-sm" type="button">
                            <span class="fas fa-plus" data-fa-transform="shrink-3 down-2"></span><
                            span class="d-none d-sm-inline-block ml-1">New</span>
                        </button>
                        <button class="btn btn-falcon-default btn-sm mx-2" type="button">
                            <span class="fas fa-filter" data-fa-transform="shrink-3 down-2"></span>
                            <span class="d-none d-sm-inline-block ml-1">Filter</span>
                        </button>
                        <button class="btn btn-falcon-default btn-sm" type="button">
                            <span class="fas fa-external-link-alt" data-fa-transform="shrink-3 down-2"></span>
                            <span class="d-none d-sm-inline-block ml-1">Export</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body p-0">
            <div class="falcon-data-table">
                <table
                    class="table table-sm mb-0 table-striped table-dashboard fs--1 data-table border-bottom border-200"
                    data-options='{"searching":false,"responsive":false,"pageLength":12,"info":false,"lengthChange":false,"sWrapper":"falcon-data-table-wrapper","dom":"<&#39;row mx-1&#39;<&#39;col-sm-12 col-md-6&#39;l><&#39;col-sm-12 col-md-6&#39;f>><&#39;table-responsive&#39;tr><&#39;row no-gutters px-1 py-3 align-items-center justify-content-center&#39;<&#39;col-auto&#39;p>>","language":{"paginate":{"next":"<span class=\"fas fa-chevron-right\"></span>","previous":"<span class=\"fas fa-chevron-left\"></span>"}}}'>
                    <thead class="bg-200 text-900">
                    <tr>
                        <th class="align-middle no-sort pr-3">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select"
                                       id="checkbox-bulk-customers-select" type="checkbox"
                                       data-checkbox-body="#customers"
                                       data-checkbox-actions="#customers-actions"
                                       data-checkbox-replaced-element="#dashboard-actions">
                                <label class="custom-control-label"
                                       for="checkbox-bulk-customers-select"></label>
                            </div>
                        </th>
                        <th class="align-middle sort">Name</th>
                        <th class="align-middle sort">Email</th>
                        <th class="align-middle sort">Phone</th>
                        <th class="align-middle sort pl-5" style="min-width: 200px;">Billing Address</th>
                        <th class="align-middle sort">Joined</th>
                        <th class="align-middle no-sort"></th>
                    </tr>
                    </thead>
                    <tbody id="customers">
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-0"/>
                                <label class="custom-control-label" for="checkbox-0"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <div class="avatar-name rounded-circle"><span>RA</span></div>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Ricky Antony</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a href="mailto:ricky@example.com">ricky@example.com</a>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:2012001851">(201)
                                200-1851</a></td>
                        <td class="py-2 align-middle pl-5">2392 Main Avenue, Penasauka, New Jersey 02139</td>
                        <td class="py-2 align-middle">30/03/2018</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-0" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-0">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a>
                                        <a class="dropdown-item text-danger" href="#!">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-1"/>
                                <label class="custom-control-label" for="checkbox-1"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <img class="rounded-circle" src="../assets/img/team/2.jpg" alt=""/>

                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Emma Watson</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a href="mailto:emma@example.com">emma@example.com</a>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:2122288403">(212)
                                228-8403</a></td>
                        <td class="py-2 align-middle pl-5">2289 5th Avenue, New York, New York, 10037</td>
                        <td class="py-2 align-middle">11/07/2017</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-1" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span></button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-1">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a><a
                                            class="dropdown-item text-danger" href="#!">Delete</a></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-2"/>
                                <label class="custom-control-label" for="checkbox-2"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <div class="avatar-name rounded-circle"><span>RA</span></div>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Rowen Atkinson</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a href="mailto:rown@example.com">rown@example.com</a>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:2012001851">(201)
                                200-1851</a></td>
                        <td class="py-2 align-middle pl-5">112 Bostwick Avenue, Jersey City, New Jersey, 0730
                        </td>
                        <td class="py-2 align-middle">05/04/2016</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-2" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span></button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-2">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a><a
                                            class="dropdown-item text-danger" href="#!">Delete</a></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-3"/>
                                <label class="custom-control-label" for="checkbox-3"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <img class="rounded-circle" src="../assets/img/team/2.jpg" alt=""/>

                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Antony Hopkins</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a href="mailto:antony@example.com">antony@example.com</a>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:9013243127">(901)
                                324-3127</a></td>
                        <td class="py-2 align-middle pl-5">3448 Ile De France St #242, Fort Wainwright, Alaska,
                            99703
                        </td>
                        <td class="py-2 align-middle">05/04/2018</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-3" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-3">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a>
                                        <a class="dropdown-item text-danger" href="#!">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-4"/>
                                <label class="custom-control-label" for="checkbox-4"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="#">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <img class="rounded-circle" src="../assets/img/team/3.jpg" alt=""/>

                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Jennifer Schramm</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a
                                href="mailto:jennifer@example.com">jennifer@example.com</a></td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <a href="tel:8283829631">(828)382-9631</a>
                        </td>
                        <td class="py-2 align-middle pl-5">659 Hannah Street, Charlotte, NC 28273</td>
                        <td class="py-2 align-middle">17/03/2016</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-4" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-4">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a>
                                        <a class="dropdown-item text-danger" href="#!">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-5"/>
                                <label class="custom-control-label" for="checkbox-5"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <div class="avatar-name rounded-circle"><span>RM</span></div>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Raymond Mims</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a
                                href="mailto:raymond@example.com">raymond@example.com</a></td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:5624685646">(562)
                                468-5646</a></td>
                        <td class="py-2 align-middle pl-5">2298 Locust Court, Artesia, CA 90701</td>
                        <td class="py-2 align-middle">12/07/2014</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-5" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-5">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a>
                                        <a class="dropdown-item text-danger" href="#!">Delete</a><
                                        /div>
                                    </div>
                                </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-6"/>
                                <label class="custom-control-label" for="checkbox-6"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <img class="rounded-circle" src="../assets/img/team/4.jpg" alt=""/>

                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Michael Jenkins</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a
                                href="mailto:jenkins@example.com">jenkins@example.com</a></td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:3026138829">(302)
                                613-8829</a></td>
                        <td class="py-2 align-middle pl-5">4678 Maud Street, Philadelphia, DE 19103</td>
                        <td class="py-2 align-middle">15/06/2014</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-6" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-6">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a>
                                        <a class="dropdown-item text-danger" href="#!">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-7"/>
                                <label class="custom-control-label" for="checkbox-7"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <img class="rounded-circle" src="../assets/img/team/13.jpg" alt=""/>

                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Kristine Cadena</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a href="mailto:cadena@example.com">cadena@example.com</a>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:3172737814">(317)
                                273-7814</a></td>
                        <td class="py-2 align-middle pl-5">3412 Crestview Manor, Indianapolis, IN 46234</td>
                        <td class="py-2 align-middle">15/04/2015</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-7" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-7">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a>
                                        <a class="dropdown-item text-danger" href="#!">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-8"/>
                                <label class="custom-control-label" for="checkbox-8"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <div class="avatar-name rounded-circle"><span>SM</span></div>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Suzanne Martinez</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a
                                href="mailto:suzanne@example.com">suzanne@example.com</a></td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:2123449983">(212)
                                344-9983</a></td>
                        <td class="py-2 align-middle pl-5">4895 Farnum Road, New York, NY 10004</td>
                        <td class="py-2 align-middle">15/04/2016</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-8" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span></button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-8">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a><a
                                            class="dropdown-item text-danger" href="#!">Delete</a></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-9"/>
                                <label class="custom-control-label" for="checkbox-9"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <div class="avatar-name rounded-circle"><span>MC</span></div>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Marie Cohen</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a href="mailto:cohen@example.com">cohen@example.com</a>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:4806103481">(480)
                                610-3481</a></td>
                        <td class="py-2 align-middle pl-5">3291 Hillside Street, Mesa, AZ 85201</td>
                        <td class="py-2 align-middle">25/08/2016</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-9" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span></button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-9">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a><a
                                            class="dropdown-item text-danger" href="#!">Delete</a></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-10"/>
                                <label class="custom-control-label" for="checkbox-10"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <img class="rounded-circle" src="../assets/img/team/9.jpg" alt=""/>

                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Michael Scates</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a href="mailto:scates@example.com">scates@example.com</a>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:3238814878">(323)
                                881-4878</a></td>
                        <td class="py-2 align-middle pl-5">162 Hillhaven Drive, Los Angeles, CA 90063</td>
                        <td class="py-2 align-middle">20/12/2016</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-10" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span></button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-10">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a><a
                                            class="dropdown-item text-danger" href="#!">Delete</a></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-11"/>
                                <label class="custom-control-label" for="checkbox-11"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <img class="rounded-circle" src="../assets/img/team/14.jpg" alt=""/>

                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Kathryn Love</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a
                                href="mailto:kathryn@example.com">kathryn@example.com</a></td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:4074463482">(407)
                                446-3482</a></td>
                        <td class="py-2 align-middle pl-5">2551 Ocala Street, Orlando, FL 32805</td>
                        <td class="py-2 align-middle">12/01/2015</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-11" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span></button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-11">
                                    <div class="bg-white py-2">
                                        <a> class="dropdown-item" href="#!">Edit</a>
                                        <a> class="dropdown-item text-danger" href="#!">Delete</a></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-12"/>
                                <label class="custom-control-label" for="checkbox-12"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <div class="avatar-name rounded-circle"><span>EP</span></div>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Estell Pollich</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a href="mailto:estell@example.com">estell@example.com</a>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:2014474782">(201)
                                447-4782</a></td>
                        <td class="py-2 align-middle pl-5">13572 Kurt Mews South Merritt, IA 52491</td>
                        <td class="py-2 align-middle">23/04/2019</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-12" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span></button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-12">
                                    <div class="bg-white py-2">
                                        <a class="dropdown-item" href="#!">Edit</a>
                                        <a class="dropdown-item text-danger" href="#!">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-13"/>
                                <label class="custom-control-label" for="checkbox-13"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <img class="rounded-circle" src="../assets/img/team/2.jpg" alt=""/>

                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Ara Mueller</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a href="mailto:ara@example.com">ara@example.com</a></td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:2029984702">(202)
                                998-4702</a></td>
                        <td class="py-2 align-middle pl-5">91979 Kohler Place Waelchiborough, CT 41291</td>
                        <td class="py-2 align-middle">23/04/2019</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-13" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span></button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-13">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a><a
                                            class="dropdown-item text-danger" href="#!">Delete</a></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-14"/>
                                <label class="custom-control-label" for="checkbox-14"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <div class="avatar-name rounded-circle"><span>LB</span></div>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Lucienne Blick</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a href="mailto:blick@example.com">blick@example.com</a>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:8512654641">(851)
                                265-4641</a></td>
                        <td class="py-2 align-middle pl-5">6757 Giuseppe Meadows Geraldinemouth, MO 48819-4970
                        </td>
                        <td class="py-2 align-middle">23/04/2019</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-14" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span></button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-14">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a>
                                        <a class="dropdown-item text-danger" href="#!">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-15"/>
                                <label class="custom-control-label" for="checkbox-15"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <img class="rounded-circle" src="../assets/img/team/5.jpg" alt=""/>

                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Laverne Haag</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a href="mailto:haag@example.com">haag@example.com</a>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:2459881927">(245)
                                988-1927</a></td>
                        <td class="py-2 align-middle pl-5">2327 Kaylee Mill East Citlalli, AZ 89582-3143</td>
                        <td class="py-2 align-middle">22/04/2019</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-15" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-15">
                                    <div class="bg-white py-2">
                                        <a class="dropdown-item" href="#!">Edit</a>
                                        <a class="dropdown-item text-danger" href="#!">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-16"/>
                                <label class="custom-control-label" for="checkbox-16"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column">
                            <a href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <img class="rounded-circle" src="../assets/img/team/6.jpg" alt=""/>

                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Brandon Bednar</h5>
                                    </div>
                                </div>
                            </a>
                        </td>
                        <td class="py-2 align-middle"><a href="mailto:bednar@example.com">bednar@example.com</a>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:9535899324">(953)
                                589-9324 </a></td>
                        <td class="py-2 align-middle pl-5">25156 Isaac Crossing Apt. 810 Lonborough, CO
                            83774-5999
                        </td>
                        <td class="py-2 align-middle">22/04/2019</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-16" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1">

                                    </span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-16">
                                    <div class="bg-white py-2">
                                        <a class="dropdown-item" href="#!">Edit</a>
                                        <a class="dropdown-item text-danger" href="#!">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-17"/>
                                <label class="custom-control-label" for="checkbox-17"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <div class="avatar-name rounded-circle"><span>DB</span><
                                            /div>
                                        </div>
                                        <div class="media-body">
                                            <h5 class="mb-0 fs--1">Dimitri Boehm</h5>
                                        </div>
                                    </div>
                            </a></td>
                        <td class="py-2 align-middle"><a
                                href="mailto:dimitri@example.com">dimitri@example.com</a></td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:9434099147">(943)
                                409-9147</a></td>
                        <td class="py-2 align-middle pl-5">71603 Wolff Plains Apt. 885 Johnstonton, MI 01581
                        </td>
                        <td class="py-2 align-middle">23/04/2019</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-17" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-17">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a>
                                        <a class="dropdown-item text-danger" href="#!">Delete</a></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-18"/>
                                <label class="custom-control-label" for="checkbox-18"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <div class="avatar-name rounded-circle"><span>TF</span></div>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Trace Farrell</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a href="mailto:trace@example.com">trace@example.com</a>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:4424850384">(442)
                                485-0384</a></td>
                        <td class="py-2 align-middle pl-5">431 Steuber Mews Apt. 252 Germanland, AK 25882</td>
                        <td class="py-2 align-middle">26/04/2019</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-18" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-18">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a><a
                                            class="dropdown-item text-danger" href="#!">Delete</a></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-19"/>
                                <label class="custom-control-label" for="checkbox-19"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <img class="rounded-circle" src="../assets/img/team/13.jpg" alt=""/>

                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Estell Nienow</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a href="mailto:nienow@example.com">nienow@example.com</a>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:5056977549">(505)
                                697-7549</a></td>
                        <td class="py-2 align-middle pl-5">4167 Laverna Manor Marysemouth, NV 74590</td>
                        <td class="py-2 align-middle">26/04/2019</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-19" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span></button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-19">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a><a
                                            class="dropdown-item text-danger" href="#!">Delete</a></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-20"/>
                                <label class="custom-control-label" for="checkbox-20"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <img class="rounded-circle" src="../assets/img/team/14.jpg" alt=""/>

                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Daisha Howe</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a href="mailto:howe@example.com">howe@example.com</a>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:3375713547">(337)
                                571-3547</a></td>
                        <td class="py-2 align-middle pl-5">829 Lavonne Valley Apt. 074 Stehrfort, RI
                            77914-0379
                        </td>
                        <td class="py-2 align-middle">25/04/2019</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-20" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span></button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-20">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a><a
                                            class="dropdown-item text-danger" href="#!">Delete</a></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-21"/>
                                <label class="custom-control-label" for="checkbox-21"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column">
                            <a href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <div class="avatar-name rounded-circle"><span>MH</span></div>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Miles Haley</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a href="mailto:haley@example.com">haley@example.com</a>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:7646194683">(764)
                                619-4683</a></td>
                        <td class="py-2 align-middle pl-5">53150 Thad Squares Apt. 263 Archibaldfort, MO 00837
                        </td>
                        <td class="py-2 align-middle">24/04/2019</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-21" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span></button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-21">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a><a
                                            class="dropdown-item text-danger" href="#!">Delete</a></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-22"/>
                                <label class="custom-control-label" for="checkbox-22"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <div class="avatar-name rounded-circle"><span>BW</span></div>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Brenda Watsica</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a
                                href="mailto:watsica@example.com">watsica@example.com</a></td>
                        <td class="py-2 align-middle white-space-nowrap"><a href="tel:9616476123">(961)
                                647-6123</a></td>
                        <td class="py-2 align-middle pl-5">9198 O'Kon Harbors Morarborough, IA 75409-7383</td>
                        <td class="py-2 align-middle">24/04/2019</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-22" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-22">
                                    <div class="bg-white py-2"><a class="dropdown-item" href="#!">Edit</a>
                                        <a class="dropdown-item text-danger" href="#!">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-23"/>
                                <label class="custom-control-label" for="checkbox-23"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column"><a
                                href="../pages/customer-details.html">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <div class="avatar-name rounded-circle"><span>EOR</span></div>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Ellie O'Reilly</h5>
                                    </div>
                                </div>
                            </a></td>
                        <td class="py-2 align-middle"><a href="mailto:ellie@example.com">ellie@example.com</a>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <a href="tel:6016888144"> (601)688-8144</a>
                        </td>
                        <td class="py-2 align-middle pl-5">1478 Kaitlin Haven Apt. 061 Lake Muhammadmouth, SC 35848</td>
                        <td class="py-2 align-middle">24/04/2019</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-23" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-23">
                                    <div class="bg-white py-2">
                                        <a class="dropdown-item" href="#!">Edit</a>
                                        <a class="dropdown-item text-danger" href="#!">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="custom-control custom-checkbox">
                                <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                       id="checkbox-24"/>
                                <label class="custom-control-label" for="checkbox-24"></label>
                            </div>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap customer-name-column">
                            <a href="#">
                                <div class="media d-flex align-items-center">
                                    <div class="avatar avatar-xl mr-2">
                                        <div class="avatar-name rounded-circle"><span>GB</span></div>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0 fs--1">Garry Brainstrow</h5>
                                    </div>
                                </div>
                            </a>
                        </td>
                        <td class="py-2 align-middle"><a href="mailto:garry@example.com">garry@example.com</a>
                        </td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <a href="tel:4018799970">(401) 879-9970</a></td>
                        <td class="py-2 align-middle pl-5">Garry Brainstrow, 13572 Kurt Mews South Merritt, IA
                            52491
                        </td>
                        <td class="py-2 align-middle">23/04/2019</td>
                        <td class="py-2 align-middle white-space-nowrap">
                            <div class="dropdown text-sans-serif">
                                <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3"
                                        type="button" id="customer-dropdown-24" data-toggle="dropdown"
                                        data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
                                    <span class="fas fa-ellipsis-h fs--1"></span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right border py-0"
                                     aria-labelledby="customer-dropdown-24">
                                    <div class="bg-white py-2">
                                        <a class="dropdown-item" href="#!">Edit</a>
                                        <a class="dropdown-item text-danger" href="#!">Delete</a></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <footer>
        <div class="row no-gutters justify-content-between fs--1 mt-4 mb-3">
            <div class="col-12 col-sm-auto text-center">
                <p class="mb-0 text-600">Thank you for creating with Falcon <span
                        class="d-none d-sm-inline-block">| </span><br class="d-sm-none"/> 2019 &copy; <a
                        href="https://themewagon.com">Themewagon</a></p>
            </div>
            <div class="col-12 col-sm-auto text-center">
                <p class="mb-0 text-600">v2.2.0</p>
            </div>
        </div>
    </footer>
@endsection
