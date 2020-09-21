import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class CityService {

    cities: string = "Vavuniya,Kalutara,Horana,Panadura,Matugama,Bandaragama,Alutgama,Beruwala,Ingiriya,Wadduwa,Mullativu,Matara,Akuressa,Weligama,Dikwella,Hakmana,Deniyaya,Kamburugamuwa,Kamburupitiya,Kekanadurra,Anuradhapura,Kekirawa,Tambuttegama,Medawachchiya,Eppawala,Galenbindunuwewa,Galnewa,Habarana,Mihintale,Nochchiyagama,Talawa,Trincomalee,Kinniya,Galle,Ambalangoda,Elpitiya,Hikkaduwa,Baddegama,Ahangama,Batapola,Bentota,Karapitiya,Batticaloa,Matale,Dambulla,Galewela,Ukuwela,Rattota,Palapathwela,Sigiriya,Yatawatta,Moneragala,Buttala,Wellawaya,Bibile,Kataragama,Polonnaruwa,Hingurakgoda,Kaduruwela,Medirigiriya,Kilinochchi,Kandy,Katugastota,Gampola,Peradeniya,Kundasale,Akurana,Ampitiya,Digana,Galagedara,Gelioya,Kadugannawa,MadawalaBazaar,Nawalapitiya,Pilimatalawa,Wattegama,Ratnapura,Embilipitiya,Balangoda,Pelmadulla,Eheliyagoda,Kuruwita,Ampara,Akkarepattu,Kalmunai,Sainthamaruthu,Jaffna,Nallur,Chavakachcheri,Kurunegala,Kuliyapitiya,Narammala,Pannala,Mawathagama,Alawwa,Bingiriya,Galgamuwa,Giriulla,Hettipola,Ibbagamuwa,Nikaweratiya,Polgahawela,Wariyapola,Tangalla,Beliatta,Tissamaharama,Hambantota,Ambalantota,NuwaraEliya,Hatton,Ginigathena,Madulla,Chilaw,Wennappuwa,Puttalam,Nattandiya,Marawila,Dankotuwa,Kegalle,Mawanella,Warakapola,Rambukkana,Ruwanwella,Dehiowita,Deraniyagala,Galigamuwa,Kitulgala,Yatiyantota,Badulla,Bandarawela,Welimada,Mahiyanganaya,HaliEla,Diyatalawa,Ella,Haputale,Passara,Rajagiriya,Dehiwala,Nugegoda,Maharagama,Piliyandala,Angoda,Athurugiriya,Avissawella,Battaramulla,Boralesgamuwa,Colombo1,Colombo10,Colombo11,Colombo12,Colombo13,Colombo14,Colombo15,Colombo2,Colombo3,Colombo4,Colombo5,Colombo6,Colombo7,Colombo8,Colombo9,Hanwella,Homagama,Kaduwela,Kesbewa,Kohuwala,Kolonnawa,Kottawa,Kotte,Malabe,Moratuwa,MountLavinia,Nawala,Padukka,Pannipitiya,Ratmalana,Talawatugoda,Wellampitiya,Gampaha,Negombo,Kelaniya,Kadawatha,Ja-Ela,Delgoda,Divulapitiya,Ganemulla,Kandana,Katunayake,Kiribathgoda,Minuwangoda,Mirigama,Nittambuwa,Ragama,Veyangoda,Wattala,Mannar";

    getCities() {
        return this.cities;
    }
}
