export interface DataObject<T>{
    id: string;                     // identifikator obiektu wewnątrz datasetu
    global_id: string;              // unikalny identyfikator wśród wszystkich obiektów Mojego Państwa
    dataset: string;                // zbiór danych, z którego pochodzi obiekt
    url: string;                    // unikalny identifykator obiektu, bedący zarówno URL pod jakim obiekt jest dostępny
    mp_url: string;                 // url obiektu, pod którym jest widoczny w serwisie MojePanstwo.pl
    schema_url: string;             // link do JSON-schema opisującej dany obiekt
    slug?: string;                   // nazwa obiektu
    score?: any;                    // wartość dopasowania obiektu do kryteriów wyszukiwania
    data: T;
}