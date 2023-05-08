@extends('layouts.master')

@section('title', 'Dashboard')

@section('content')
    <h1>Dashboard</h1>
    <!-- Thêm các thành phần của dashboard vào đây -->
    @if (Auth::check())
        <p>Hello, {{ Auth::user()->name }}</p>
    @endif

@endsection
