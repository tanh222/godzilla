@extends('layouts.main')

@section('title', 'Dashboard')

@section('content')
    <nav class="navbar navbar-light navbar-glass fs--1 font-weight-semi-bold row navbar-top sticky-kit navbar-expand">
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                data-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse"
                aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand text-left ml-3" href="../index.html">
            <div class="d-flex align-items-center">
                <img class="mr-2" src="{{ asset('img/logo/falcon.png') }}" alt="" width="40"/>
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
                                                <img class="rounded-circle" src="{{ asset('img/team/thumb.png') }}"
                                                     alt="img"/>
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
                            <img class="rounded-circle" src="{{ asset ('img/team/3-thumb.png') }}" alt="img"/>
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
                            <span class="fas fa-plus" data-fa-transform="shrink-3 down-2"></span>
                            <span class="d-none d-sm-inline-block ml-1"> New </span>
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
                                <label class="custom-control-label" for="checkbox-bulk-customers-select"></label>
                            </div>
                        </th>
                        <th class="align-middle sort"> Tên</th>
                        <th class="align-middle sort ">Email</th>
                        <th class="align-middle sort"> Số điện thoại</th>
                        <th class="align-middle sort pl-4">Địa chỉ</th>
                        <th class="align-middle sort">Ngày tạo</th>
                    </tr>
                    </thead>
                    <tbody id="customers">
                    @foreach($users as $row)
                        <tr class="btn-reveal-trigger">
                            <td class="py-2 align-middle white-space-nowrap">
                                <div class="custom-control custom-checkbox">
                                    <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                           id="checkbox-0"/>
                                    <label class="custom-control-label" for="checkbox-0"></label>
                                </div>
                            </td>
                            <td class="py-2 align-middle white-space-nowrap customer-name-column">
                                <a href="#">
                                    <div class="media d-flex align-items-center">
                                        <div class="avatar avatar-xl mr-2">
                                            <div class="avatar-name rounded-circle">
                                                <span>RA</span>
                                            </div>
                                        </div>
                                        <div class="media-body">
                                            <h5 class="mb-0 fs--1">{{$row->name}}</h5>
                                        </div>
                                    </div>
                                </a>
                            </td>
                            <td class="py-2 align-middle">
                                <a href="mailto:ricky@example.com">{{$row->email}}</a>
                            </td>
                            <td class="py-2 align-middle white-space-nowrap">
                                <a href="tel:{{$row->phone}}">{{$row->phone}}</a>
                            </td>
                            <td class="py-2 align-middle pl-4 text-capitalize">{{$row->address}}</td>
                            <td class="py-2 align-middle">{{$row->date_created}}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>

        <div class="d-flex justify-content-center">
            {{ $users->links('vendor.pagination.custom')}}
        </div>
    </div>
@endsection
