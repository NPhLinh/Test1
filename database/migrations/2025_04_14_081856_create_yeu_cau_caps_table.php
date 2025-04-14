<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('yeu_cau_caps', function (Blueprint $table) {
            $table->id();
            $table->integer('id_to_chuc');
            $table->integer('id_hoc_vien');
            $table->integer('tinh_trang');
            $table->integer('id_chung_chi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('yeu_cau_caps');
    }
};
