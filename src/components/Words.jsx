import React, { useState } from "react";
import "./Words.css";

function Words() {
    const initialQuotes = [
        "Cinta adalah bahasa yang dipahami oleh hati.",
        "Kode adalah puisi yang hanya dimengerti oleh mesin dan penciptanya",
        "Hidup adalah seni menggambar tanpa penghapus.",
        "Debugging adalah seni mengubah kesalahan menjadi pelajaran.",
        "Setiap hari adalah halaman baru dari cerita kita.",
        "Setiap perangkat memiliki cerita, setiap koneksi memiliki tujuan.",
        "Di dunia maya, saya tidak hanya melihat data, saya memahami maknanya.",
        "Keamanan adalah ilusi, kreativitas adalah kenyataan.",
        "IoT bukan hanya teknologi, ini adalah bahasa masa depan.",
        "Kode adalah bahasa yang tidak pernah berhenti berbicara.",
    ];

    const [quotes, setQuotes] = useState(initialQuotes);
    const [showPopup, setShowPopup] = useState(false);
    const [randomWord, setRandomWord] = useState("");

    const fetchRandomWord = async () => {
        try {
            const response = await fetch("/words.json");
            const data = await response.json();
            const wordsArray = data.words;

            // Pilih kata secara random
            const randomIndex = Math.floor(Math.random() * wordsArray.length);
            setRandomWord(wordsArray[randomIndex]);

            setShowPopup(true);
        } catch (error) {
            console.error("Gagal memuat kata-kata tambahan:", error);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <section id="words" className="words">
            <h2>Kata-Kata Pilihan</h2>
            <ul>
                {quotes.map((quote, index) => (
                    <li key={index}>{quote}</li>
                ))}
            </ul>
            <button className="more-words-btn" onClick={fetchRandomWord}>
                More Words
            </button>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Kata-Kata Tambahan</h3>
                        <p>{randomWord}</p>
                        <button className="close-btn" onClick={closePopup}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Words;
