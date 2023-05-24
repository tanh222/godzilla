@extends('layouts.main')

@section('title', 'Dashboard')

@section('content')
    <div class="card">
        <div class="card-header">
            <div class="row align-items-center justify-content-between">
                <div class="col-4 col-sm-auto d-flex align-items-center pr-0">
                    <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0">Danh sách phân quyền</h5>
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
                            <a href="{{route('create-roles')}}">Thêm mới</a>
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
                        <th class="align-middle sort"> </th>
                    </tr>
                    </thead>
                    <tbody id="customers">
                    @foreach($roles as $row)
                        <tr class="btn-reveal-trigger">
                            <td class="py-2 align-middle white-space-nowrap">
                                <div class="custom-control custom-checkbox">
                                    <input class="custom-control-input checkbox-bulk-select-target" type="checkbox"
                                           id="checkbox-0"/>
                                    <label class="custom-control-label" for="checkbox-0"></label>
                                </div>
                            </td>
                            <td class="py-2 align-middle white-space-nowrap customer-name-column w-50">
                                <a href="#">
                                    <div class="media d-flex align-items-center">
                                        <div class="media-body">
                                            <h5 class="mb-0 fs--1">{{$row->name}}</h5>
                                        </div>
                                    </div>
                                </a>
                            </td>
                            <td class="py-2 align-middle d-flex">
                                <a class="dropdown-item" href="{{ route('update-roles', ['id' => $row->id]) }}">Sửa</a>
                                <a class="dropdown-item text-danger" href="{{ route('delete.roles', ['id'=> $row->id ]) }}">Xóa</a>
                            </td>
                        </tr>
                    @endforeach

                    </tbody>
                </table>
            </div>
        </div>

        <div class="d-flex justify-content-center">
            {{ $roles->links('vendor.pagination.custom')}}
        </div>
    </div>
@endsection

