<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FuncionarioController;
use App\Http\Controllers\EmpresaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

route::get('/funcionarios', [FuncionarioController::class, 'index']); // Rota principal funcionarios
route::get('/funcionarios/{id}', [FuncionarioController::class, 'show']); // Trazer informações do funcionario por id
route::post('/funcionarios', [FuncionarioController::class, 'store']); // Enviar funcionario para BD
route::delete('/funcionarios/{id}', [FuncionarioController::class, 'destroy']); // Deleta funcionario por id


route::get('/empresas', [EmpresaController::class, 'index']); // Rota principal empresas
route::get('/empresas/{id}', [EmpresaController::class, 'show']); // Trazer informações da empresa por id
route::post('/empresas', [EmpresaController::class, 'store']); // Enviar empresa para BD
route::delete('/empresas/{id}', [EmpresaController::class, 'destroy']); // Deleta empresa por id
