let host = "https://localhost:5001";

function submitRequest(method, endpoint, body, onSuccess, onFailure) {
    fetch(new Request(host + endpoint, { method: method, body: body })).then(response => {
        return response.json();
    }).then(json => {
        if (json.success) {
            onSuccess(json.data);
        }
        else {
            onFailure(json.message);
        }
    });
}

export default class UPClient {

    // onFailure: (message: String) -> void

    // onSuccess: (currentIndex: Number, endorsements: { homepageURL: String, donateURL: String, summary: String }[]) -> void
    static getEndorsementList(onSuccess, onFailure) {
        submitRequest("GET", "/api/endorsements/list", null, data => {
            onSuccess(data.currentIndex, data.endorsements);
        }, onFailure);
    }

    // onSuccess: ({ homepageURL: String, donateURL: String, summary: String }) -> void
    static getCurrentEndorsement(onSuccess, onFailure) {
        submitRequest("GET", "/api/endorsements/current", null, data => {
            onSuccess(data);
        }, onFailure);
    }

    // onSuccess: () -> void
    static updateEndorsements(currentIndex, endorsements, onSuccess, onFailure) {
        submitRequest("POST", "/api/endorsements/update", { currentIndex: currentIndex, endorsements: endorsements }, _ => {
            onSuccess();
        }, onFailure);
    }
}

/* EXAMPLE
getEndorsementsList(
    (currentIndex, endorsements) => {
        console.log("current index: " + currentIndex);
    },
    (message) => {
        console.log("o no");
    }
)
*/