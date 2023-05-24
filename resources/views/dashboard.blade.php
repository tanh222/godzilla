@extends('layouts.main')

@section('title', 'Dashboard')

@section('content')
    <div class="card">
        <div class="card-header">
            <div class="row align-items-center justify-content-between">
                <div class="col-4 col-sm-auto d-flex align-items-center pr-0">
                    <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0"> Quản lí người dùng </h5>
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
                            <a href="{{route('create-user')}}">Thêm mới</a>
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
                        <th class="align-middle sort">Họ và tên</th>
                        <th class="align-middle sort">Email</th>
                        <th class="align-middle sort">Quyền</th>
                        <th class="align-middle sort">Số điện thoại</th>
                        <th class="align-middle sort pl-5">Địa chỉ</th>
                        <th class="align-middle sort"></th>
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
                            <td class="py-2 align-middle">
                                {{$row->first_name}} {{$row->last_name}}
                            </td>
                            <td class="py-2 align-middle">
                                <a href="mailto:ricky@example.com">{{$row->email}}</a>
                            </td>
                            <td class="py-2 align-middle text-capitalize">{{$row->role->name ?? ''}}</td>
                            <td class="py-2 align-middle white-space-nowrap">
                                <a href="tel:{{$row->phone}}">{{$row->phone}}</a>
                            </td>
                            <td class="py-2 align-middle pl-5 text-capitalize">{{$row->address}}</td>
                            <td class="py-2 align-middle d-flex">
                                <a class="dropdown-item"
                                   href="{{ route('show.form-update', ['id' => $row->id]) }}">Sửa</a>
                                <a class="dropdown-item text-danger"
                                   href="{{ route('delete.user', ['id'=> $row->id ]) }} }}">Xóa</a>
                            </td>
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
