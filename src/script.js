const dataKaryawan = [
    {
        nik: 'BTT-001',
        nama: 'Muhammad Bintang',
        jabatan: 'Manager',
        status: 'Karyawan Tetap',
        penghasilan: {
            gapok: 'Rp 1.300.000',
            Tjabatan: 'Rp 300.000',
            Tkonsumsi: 'Rp 200.000',
            Tharian: 'Rp 300.000',
            bonusTarget: 'Rp 400.000',
        },
        potongan: {
            pph: 'Rp 100.000',
            asuransi: '-',
        },
        total: {
            aTotal: 'Rp 2.400.000',
            bTotal: 'Rp 100.000',
        },
        hasil: {
            terbilang: 'Dua juta tiga ratus rupiah',
            jumlah: 'Rp 2.300.000'
        }
    },
    {
        nik: 'CDD-002',
        nama: 'Zhaka Hidayat',
        jabatan: 'Karyawan Biasa',
        status: 'Karyawan Tetap',
        penghasilan: {
            gapok: 'Rp 500.000',
            Tjabatan: 'Rp 300.000',
            Tkonsumsi: 'Rp 200.000',
            Tharian: 'Rp 300.000',
            bonusTarget: 'Rp 400.000',
        },
        potongan: {
            pph: 'Rp 50.000',
            asuransi: 'Rp 50.000',
        },
        total: {
            aTotal: 'Rp 1.700.000',
            bTotal: 'Rp 100.000',
        },
        hasil: {
            terbilang: 'Satu juta enam ratus ribu rupiah',
            jumlah: 'Rp 1.600.000'
        }
    },
    {
        nik: 'CCC-009',
        nama: 'Fery Fadul Rahman',
        jabatan: 'Karyan Biasa',
        status: 'Karyawan Honor',
        penghasilan: {
            gapok: 'Rp 300.000',
            Tjabatan: 'Rp 100.000',
            Tkonsumsi: 'Rp 50.000',
            Tharian: 'Rp 50.000',
            bonusTarget: 'Rp 50.000',
        },
        potongan: {
            pph: 'Rp 50.000',
            asuransi: '-',
        },
        total: {
            aTotal: 'Rp 550.000',
            bTotal: 'Rp 50.000',
        },
        hasil: {
            terbilang: 'Lima ratus ribu rupiah',
            jumlah: 'Rp 500.000'
        }
    },
    {
        nik: 'BII-002',
        nama: 'Wulandari',
        jabatan: 'Karyawan',
        status: 'karyawan tetap',
        penghasilan: {
            gapok: 'Rp 700.000',
            Tjabatan: 'Rp 100.000',
            Tkonsumsi: 'Rp 200.000',
            Tharian: 'Rp 300.000',
            bonusTarget: 'Rp 300.000',
        },
        potongan: {
            pph: 'Rp 300.000',
            asuransi: '-',
        },
        total: {
            aTotal: 'Rp 1.600.000',
            bTotal: 'Rp 300.000',
        },
        hasil: {
            terbilang: 'Satu juta tiga ratus ribu rupiah',
            jumlah: 'Rp 1.300.000'
        }
    },
    {
        nik: 'BIC-003',
        nama: 'Syahru Ramadhan',
        jabatan: 'Mangaer Pemasaran',
        status: 'karyawan tetap',
        penghasilan: {
            gapok: 'Rp 1.300.000',
            Tjabatan: 'Rp 300.000',
            Tkonsumsi: 'Rp 200.000',
            Tharian: 'Rp 300.000',
            bonusTarget: 'Rp 400.000',
        },
        potongan: {
            pph: 'Rp 100.000',
            asuransi: '-',
        },
        total: {
            aTotal: 'Rp 2.500.000',
            bTotal: 'Rp 100.000',
        },
        hasil: {
            terbilang: 'Dua juta empat ratus ribu rupiah',
            jumlah: 'Rp 2.400.000'
        }
    },
]

const innerApp = document.querySelector('#slip-app');
const chooseName = document.querySelector('#chooseName');

const TampilData = (data) => {
    return (
        `
        <div>
        <table class="text-left flex flex-row gap-y-2">
            <tr>
                <td class="pr-5">
                    NIK
                </td>
                <th>${data.nik}</th>
            </tr>
            <tr>
                <td class="pr-5">Nama</td>
                <th>${data.nama}</th>
            </tr>
            <tr>
                <td class="pr-5">Jabatan</td>
                <th>${data.jabatan}</th>
            </tr>
            <tr>
                <td class="pr-5">Status</td>
                <th>${data.status}</th>
            </tr>
        </table>
    </div>
    <div class="flex flex-row mt-3">
        <div class="w-1/2">
            <h1 class="font-bold text-lg">Penghasilan</h1>
            <table class="text-left flex flex-row gap-y-2">
                <tr>
                    <td class="pr-5">
                        Gaji Pokok
                    </td>
                    <td class='bg-amber-300'>${data.penghasilan.gapok}</td>
                </tr>
                <tr>
                    <td class="pr-5">
                        Tj Jabatan
                    </td>
                    <td class='bg-amber-300'>${data.penghasilan.Tjabatan}</td>
                </tr>
                <tr>
                    <td class="pr-5">
                        Tj Konsumsi
                    </td>
                    <td class='bg-amber-300'>${data.penghasilan.Tkonsumsi}</td>
                </tr>
                <tr>
                    <td class="pr-5">
                        Tj Harian
                    </td>
                    <td class='bg-amber-300'>${data.penghasilan.Tharian}</td>
                </tr>
                <tr>
                    <td class="pr-5">
                        Bonus Target
                    </td>
                    <td class='bg-amber-300'>${data.penghasilan.bonusTarget}</td>
                </tr>
            </table>
            <h1 class="font-bold text-lg"> Total (A) ${data.total.aTotal}</h1>
        </div>
        <div class="w-1/2">
            <h1 class="font-bold text-lg">Potongan</h1>
            <table class="text-left flex flex-row gap-y-2">
                <tr>
                    <td class="pr-5">
                        Pph 2 =
                    </td>
                    <td class='bg-amber-300'>${data.potongan.pph}</td>
                </tr>
                <tr>
                    <td class="pr-5">
                        Asuransi
                    </td>
                    <td class='bg-amber-300'>${data.potongan.asuransi}</td>
                </tr>
            </table>
            <h1 class="font-bold text-lg"> Total (B) ${data.total.bTotal}</h1>
        </div>
    </div>
    <div class="text-left py-2 border border-y-2 border-black bg-gray-300 border-x-0 mt-3">TOTAL (A - B) =
        <span class='bg-amber-300'>${data.hasil.jumlah}</span></div>
    <div class="text-left py-2 border border-t-0 border-b-2 border-black bg-gray-300 border-x-0 mb-3">
        Terbilang
        = ${data.hasil.terbilang}</div>
</div>
        `
    );
}

const TampilKosong = () => {
    return (
        `
        <div>
        <table class="text-left flex flex-row gap-y-2">
            <tr>
                <td class="pr-5">
                    NIK :
                </td>
                <th>-----</th>
            </tr>
            <tr>
                <td class="pr-5">Nama :</td>
                <th>-----</th>
            </tr>
            <tr>
                <td class="pr-5">Jabatan :</td>
                <th>-----</th>
            </tr>
            <tr>
                <td class="pr-5">Status :</td>
                <th>-----</th>
            </tr>
        </table>
    </div>
    <div class="flex flex-row mt-3">

        <div class="w-1/2">
            <h1 class="font-bold text-lg">Penghasilan</h1>
            <table class="text-left flex flex-row gap-y-2">
                <tr>
                    <td class="pr-5">
                        Gaji Pokok =
                    </td>
                    <td>Rp -----</td>
                </tr>
                <tr>
                    <td class="pr-5">
                        Tj Jabatan =
                    </td>
                    <td>Rp -----</td>
                </tr>
                <tr>
                    <td class="pr-5">
                        Tj Konsumsi =
                    </td>
                    <td>Rp -----</td>
                </tr>
                <tr>
                    <td class="pr-5">
                        Tj Harian =
                    </td>
                    <td>Rp -----</td>
                </tr>
                <tr>
                    <td class="pr-5">
                        Bonus Target =
                    </td>
                    <td>Rp -----</td>
                </tr>
            </table>
            <h1 class="font-bold text-lg"> Total (A) Rp -----</h1>
        </div>
        <div class="w-1/2">
            <h1 class="font-bold text-lg">Potongan</h1>
            <table class="text-left flex flex-row gap-y-2">
                <tr>
                    <td class="pr-5">
                        Pph 2 =
                    </td>
                    <td>Rp -----</td>
                </tr>
                <tr>
                    <td class="pr-5">
                        Asuransi =
                    </td>
                    <td>Rp -----</td>
                </tr>
            </table>
            <h1 class="font-bold text-lg"> Total (B) Rp -----</h1>
        </div>
    </div>
    <div class="text-left py-2 border border-y-2 border-black bg-gray-300 border-x-0 mt-3">TOTAL (A - B) =
        Rp -----</div>
    <div class="text-left py-2 border border-t-0 border-b-2 border-black bg-gray-300 border-x-0 mb-3">
        Terbilang
        = -------</div>
        `
    )
}


chooseName.addEventListener('change', function (e) {
    const fixData = dataKaryawan.filter(data => data.nama.toLowerCase().includes(e.target.value.toLowerCase()));

    let fixHtml = fixData.map(data => {
        return TampilData(data);
    })

    if (!fixData.length == 0) {
        innerApp.innerHTML = fixHtml;
    } else {
        innerApp.innerHTML = TampilKosong();
    }
});







