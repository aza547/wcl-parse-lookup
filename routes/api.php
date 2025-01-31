use App\Http\Controllers\ApiController;

Route::get('/fetch-data', [ApiController::class, 'fetchData']);