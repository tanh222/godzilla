@extends('layouts.main')

@section('content')
    <div class="card">
        <div class="card-body p-4">
            <div class="row text-left justify-content-between align-itemgit s-center mb-2">
                <div class="col-auto my-3">
                    <h4> Thêm mới phân quyền </h4>
                </div>
            </div>
            <form method="POST" action="{{ route('create.roles')}}">
                @csrf
                <div class="form-group">
                    <input class="form-control" id="name" name="name" type="text" placeholder="Name"/>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary mt-3" type="submit" name="submit">Save</button>
                </div>
            </form>
        </div>
    </div>
@endsection
