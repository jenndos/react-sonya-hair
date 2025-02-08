// import React, { useState, useEffect } from "react";
//
// const Image = ({ id, src, alt = "image", clickable = true, ...props }) => {
//     const [isPopupOpen, setPopupOpen] = useState(false);
//     const [largeImageSrc, setLargeImageSrc] = useState(src);
//
//     const handleOpenPopup = () => {
//         if (clickable) {
//             const bigImage = src.replace("_small", ""); // Replace '_small' with an empty string to get the large image path
//             setLargeImageSrc(bigImage);
//             setPopupOpen(true);
//         }
//     };
//
//     const handleClosePopup = () => setPopupOpen(false);
//
//     useEffect(() => {
//         if (isPopupOpen) {
//             document.body.style.overflow = "hidden";
//         } else {
//             document.body.style.overflow = "auto";
//         }
//
//         return () => {
//             document.body.style.overflow = "auto";
//         };
//     }, [isPopupOpen]);
//
//     return (
//         <>
//             {/* Clickable Image */}
//             <img
//                 id={id}
//                 src={src}
//                 alt={alt}
//                 onClick={handleOpenPopup}
//                 style={{
//                     cursor: clickable ? "pointer" : "default",
//                 }}
//                 {...props}
//             />
//
//             {/* Popup */}
//             {isPopupOpen && (
//                 <div
//                     onClick={handleClosePopup} // Close when clicking the overlay
//                     style={{
//                         position: "fixed",
//                         top: 0,
//                         left: 0,
//                         width: "100vw",
//                         height: "100vh",
//                         backgroundColor: "rgba(0, 0, 0, 0.8)",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         zIndex: 1000,
//                     }}
//                 >
//                     <div
//                         style={{
//                             position: "relative",
//                             display: "inline-block",
//                         }}
//                     >
//                         {/* Full-Screen Image */}
//                         <img
//                             src={largeImageSrc}
//                             alt={alt}
//                             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
//                             style={{
//                                 maxHeight: "90vh",
//                                 maxWidth: "90vw",
//                                 boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
//                                 borderRadius: "8px",
//                             }}
//                         />
//
//                         {/* Close Icon */}
//                         <button
//                             onClick={handleClosePopup}
//                             style={{
//                                 position: "absolute",
//                                 top: "-10px",
//                                 right: "-10px",
//                                 background: "none",
//                                 border: "none",
//                                 color: "white",
//                                 fontSize: "44px",
//                                 cursor: "pointer",
//                             }}
//                         >
//                             &times;
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };
//
// export default Image;


// import React, { useState, useEffect } from "react";
//
// const Image = ({ id, src, alt = "image", name, clickable = true, images = [], ...props }) => {
//     const [isPopupOpen, setPopupOpen] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [largeImageSrc, setLargeImageSrc] = useState(src);
//
//     const handleOpenPopup = () => {
//         if (clickable) {
//             const initialIndex = images.findIndex((image) => image === src);
//             setCurrentIndex(initialIndex !== -1 ? initialIndex : 0);
//             const bigImage = src.replace("_small", ""); // Replace '_small' with an empty string to get the large image path
//             setLargeImageSrc(bigImage);
//             setPopupOpen(true);
//         }
//     };
//
//     const handleClosePopup = () => setPopupOpen(false);
//
//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//     };
//
//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//     };
//
//     const handleKeyDown = (e) => {
//         if (isPopupOpen) {
//             if (e.key === "ArrowLeft") {
//                 handlePrev();
//             } else if (e.key === "ArrowRight") {
//                 handleNext();
//             } else if (e.key === "Escape") {
//                 handleClosePopup();
//             }
//         }
//     };
//
//     // Block scrolling and add keyboard event listener when popup is open
//     useEffect(() => {
//         if (isPopupOpen) {
//             document.body.style.overflow = "hidden";
//             window.addEventListener("keydown", handleKeyDown);
//         } else {
//             document.body.style.overflow = "auto";
//         }
//
//         return () => {
//             document.body.style.overflow = "auto";
//             window.removeEventListener("keydown", handleKeyDown);
//         };
//     }, [isPopupOpen]);
//
//     return (
//         <>
//             {/* Clickable Image */}
//             <img
//                 id={id}
//                 src={src}
//                 alt={alt}
//                 onClick={handleOpenPopup}
//                 style={{
//                     cursor: clickable ? "pointer" : "default",
//                 }}
//                 {...props}
//             />
//
//             {/* Popup */}
//             {isPopupOpen && (
//                 <div
//                     onClick={handleClosePopup} // Close when clicking the overlay
//                     style={{
//                         position: "fixed",
//                         top: 0,
//                         left: 0,
//                         width: "100vw",
//                         height: "100vh",
//                         backgroundColor: "rgba(0, 0, 0, 0.8)",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         zIndex: 1000,
//                     }}
//                 >
//                     <div
//                         style={{
//                             position: "relative",
//                             display: "inline-block",
//                         }}
//                     >
//                         {/* Left Arrow */}
//                         <button
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 handlePrev();
//                             }}
//                             style={{
//                                 position: "absolute",
//                                 left: "-50px",
//                                 top: "50%",
//                                 transform: "translateY(-50%)",
//                                 background: "none",
//                                 border: "none",
//                                 color: "white",
//                                 fontSize: "84px",
//                                 cursor: "pointer",
//                                 zIndex: 1001,
//                             }}
//                         >
//                             &#8249;
//                         </button>
//
//                         {/* Full-Screen Image */}
//                         <img
//                             src={largeImageSrc}
//                             alt={alt}
//                             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
//                             style={{
//                                 maxHeight: "80vh",
//                                 maxWidth: "70vw",
//                                 height: "auto",
//                                 width: "auto",
//                                 boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
//                                 borderRadius: "8px",
//                             }}
//                         />
//
//                         {/* Right Arrow */}
//                         <button
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleNext();
//                             }}
//                             style={{
//                                 position: "absolute",
//                                 right: "-50px",
//                                 top: "50%",
//                                 transform: "translateY(-50%)",
//                                 background: "none",
//                                 border: "none",
//                                 color: "white",
//                                 fontSize: "84px",
//                                 cursor: "pointer",
//                                 zIndex: 1001,
//                             }}
//                         >
//                             &#8250;
//                         </button>
//
//                         {/* Close Icon */}
//                         <button
//                             onClick={handleClosePopup}
//                             style={{
//                                 position: "absolute",
//                                 top: "-40px",
//                                 right: "-40px",
//                                 background: "none",
//                                 border: "none",
//                                 color: "white",
//                                 fontSize: "44px",
//                                 cursor: "pointer",
//                             }}
//                         >
//                             &times;
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };
//
// export default Image;

// import React, { useState, useEffect } from "react";
//
// const Image = ({ id, src, alt = "image", clickable = true, images = [], ...props }) => {
//     const [isPopupOpen, setPopupOpen] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(0);
//
//     const handleOpenPopup = () => {
//         if (clickable) {
//             const initialIndex = images.findIndex((image) => image === src);
//             setCurrentIndex(initialIndex !== -1 ? initialIndex : 0);
//             setPopupOpen(true);
//         }
//     };
//
//     const handleClosePopup = () => setPopupOpen(false);
//
//     const handlePrev = (e) => {
//         e.stopPropagation();
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//     };
//
//     const handleNext = (e) => {
//         e.stopPropagation();
//         setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//     };
//
//     useEffect(() => {
//         if (isPopupOpen) {
//             document.body.style.overflow = "hidden";
//         } else {
//             document.body.style.overflow = "auto";
//         }
//
//         return () => {
//             document.body.style.overflow = "auto";
//         };
//     }, [isPopupOpen]);
//
//     return (
//         <>
//             {/* Clickable Image */}
//             <img
//                 id={id}
//                 src={src}
//                 alt={alt}
//                 onClick={handleOpenPopup}
//                 style={{
//                     cursor: clickable ? "pointer" : "default",
//                 }}
//                 {...props}
//             />
//
//             {/* Popup */}
//             {isPopupOpen && (
//                 <div
//                     onClick={handleClosePopup} // Close when clicking the overlay
//                     style={{
//                         position: "fixed",
//                         top: 0,
//                         left: 0,
//                         width: "100vw",
//                         height: "100vh",
//                         backgroundColor: "rgba(0, 0, 0, 0.8)",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         zIndex: 1000,
//                     }}
//                 >
//                     <div
//                         style={{
//                             position: "relative",
//                             display: "inline-block",
//                         }}
//                     >
//                         {/* Left Arrow */}
//                         <button
//                             onClick={handlePrev}
//                             style={{
//                                 position: "absolute",
//                                 left: "-50px",
//                                 top: "50%",
//                                 transform: "translateY(-50%)",
//                                 background: "none",
//                                 border: "none",
//                                 color: "white",
//                                 fontSize: "44px",
//                                 cursor: "pointer",
//                                 zIndex: 1001,
//                             }}
//                         >
//                             &#8249;
//                         </button>
//
//                         {/* Full-Screen Image */}
//                         <img
//                             src={images[currentIndex].replace("_small", "")}
//                             alt={alt}
//                             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
//                             style={{
//                                 maxHeight: "90vh",
//                                 maxWidth: "90vw",
//                                 boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
//                                 borderRadius: "8px",
//                             }}
//                         />
//
//                         {/* Right Arrow */}
//                         <button
//                             onClick={handleNext}
//                             style={{
//                                 position: "absolute",
//                                 right: "-50px",
//                                 top: "50%",
//                                 transform: "translateY(-50%)",
//                                 background: "none",
//                                 border: "none",
//                                 color: "white",
//                                 fontSize: "44px",
//                                 cursor: "pointer",
//                                 zIndex: 1001,
//                             }}
//                         >
//                             &#8250;
//                         </button>
//
//                         {/* Close Icon */}
//                         <button
//                             onClick={handleClosePopup}
//                             style={{
//                                 position: "absolute",
//                                 top: "-10px",
//                                 right: "-10px",
//                                 background: "none",
//                                 border: "none",
//                                 color: "white",
//                                 fontSize: "44px",
//                                 cursor: "pointer",
//                             }}
//                         >
//                             &times;
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };
//
// export default Image;

// import React, { useState, useEffect } from "react";
//
// const Image = ({ id, src, alt = "image", clickable = true, images = [], ...props }) => {
//     const [isPopupOpen, setPopupOpen] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(0);
//
//     const handleOpenPopup = () => {
//         if (clickable) {
//             const initialIndex = images.findIndex((image) => image === src);
//             setCurrentIndex(initialIndex !== -1 ? initialIndex : 0);
//             setPopupOpen(true);
//         }
//     };
//
//     const handleClosePopup = () => setPopupOpen(false);
//
//     const handlePrev = (e) => {
//         e.stopPropagation();
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//     };
//
//     const handleNext = (e) => {
//         e.stopPropagation();
//         setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//     };
//
//     const handleKeyDown = (e) => {
//         if (isPopupOpen) {
//             if (e.key === "ArrowLeft") {
//                 handlePrev(e);
//             } else if (e.key === "ArrowRight") {
//                 handleNext(e);
//             } else if (e.key === "Escape") {
//                 handleClosePopup();
//             }
//         }
//     };
//
//     useEffect(() => {
//         if (isPopupOpen) {
//             document.body.style.overflow = "hidden";
//             window.addEventListener("keydown", handleKeyDown);
//         } else {
//             document.body.style.overflow = "auto";
//         }
//
//         return () => {
//             document.body.style.overflow = "auto";
//             window.removeEventListener("keydown", handleKeyDown);
//         };
//     }, [isPopupOpen]);
//
//     return (
//         <>
//             {/* Clickable Image */}
//             <img
//                 id={id}
//                 src={src}
//                 alt={alt}
//                 onClick={handleOpenPopup}
//                 style={{
//                     cursor: clickable ? "pointer" : "default",
//                 }}
//                 {...props}
//             />
//
//             {/* Popup */}
//             {isPopupOpen && (
//                 <div
//                     onClick={handleClosePopup} // Close when clicking the overlay
//                     style={{
//                         position: "fixed",
//                         top: 0,
//                         left: 0,
//                         width: "100vw",
//                         height: "100vh",
//                         backgroundColor: "rgba(0, 0, 0, 0.8)",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         zIndex: 1000,
//                     }}
//                 >
//                     <div
//                         style={{
//                             position: "relative",
//                             display: "inline-block",
//                         }}
//                     >
//                         {/* Left Arrow */}
//                         <button
//                             onClick={handlePrev}
//                             style={{
//                                 position: "absolute",
//                                 left: "10px",
//                                 top: "50%",
//                                 transform: "translateY(-50%)",
//                                 background: "none",
//                                 border: "none",
//                                 color: "white",
//                                 fontSize: "44px",
//                                 cursor: "pointer",
//                                 zIndex: 1001,
//                             }}
//                         >
//                             &#8249;
//                         </button>
//
//                         {/* Full-Screen Image */}
//                         <img
//                             src={images[currentIndex].replace("_small", "")}
//                             alt={alt}
//                             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
//                             style={{
//                                 width: "auto",
//                                 height: "auto",
//                                 maxWidth: "90vw",
//                                 maxHeight: "90vh",
//                                 display: "block",
//                                 margin: "auto",
//                                 boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
//                                 borderRadius: "8px",
//                             }}
//                         />
//
//                         {/* Right Arrow */}
//                         <button
//                             onClick={handleNext}
//                             style={{
//                                 position: "absolute",
//                                 right: "10px",
//                                 top: "50%",
//                                 transform: "translateY(-50%)",
//                                 background: "none",
//                                 border: "none",
//                                 color: "white",
//                                 fontSize: "44px",
//                                 cursor: "pointer",
//                                 zIndex: 1001,
//                             }}
//                         >
//                             &#8250;
//                         </button>
//
//                         {/* Close Icon */}
//                         <button
//                             onClick={handleClosePopup}
//                             style={{
//                                 position: "absolute",
//                                 top: "10px",
//                                 right: "10px",
//                                 background: "none",
//                                 border: "none",
//                                 color: "white",
//                                 fontSize: "44px",
//                                 cursor: "pointer",
//                                 zIndex: 1001,
//                             }}
//                         >
//                             &times;
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };
//
// export default Image;

import React, { useState, useEffect } from "react";

const Image = ({ id, src, alt = "image", clickable = true, images = [], ...props }) => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOpenPopup = () => {
        if (clickable) {
            const initialIndex = images.findIndex((image) => image === src);
            setCurrentIndex(initialIndex !== -1 ? initialIndex : 0);
            setPopupOpen(true);
        }
    };

    const handleClosePopup = () => setPopupOpen(false);

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleKeyDown = (e) => {
        if (isPopupOpen) {
            if (e.key === "ArrowLeft") {
                handlePrev(e);
            } else if (e.key === "ArrowRight") {
                handleNext(e);
            } else if (e.key === "Escape") {
                handleClosePopup();
            }
        }
    };

    useEffect(() => {
        if (isPopupOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isPopupOpen]);

    return (
        <>
            {/* Clickable Image */}
            <img
                id={id}
                src={src}
                alt={alt}
                onClick={handleOpenPopup}
                style={{
                    cursor: clickable ? "pointer" : "default",
                }}
                {...props}
            />

            {/* Popup */}
            {isPopupOpen && (
                <div
                    onClick={handleClosePopup} // Close when clicking the overlay
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            display: "inline-block",
                        }}
                    >
                        {/* Full-Screen Image */}
                        <img
                            src={images[currentIndex].replace("_small", "")}
                            alt={alt}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                            style={{
                                width: "auto",
                                height: "auto",
                                maxWidth: "90vw",
                                maxHeight: "90vh",
                                display: "block",
                                margin: "auto",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                                borderRadius: "8px",
                            }}
                        />

                        {/* Left Arrow */}
                        <button
                            onClick={handlePrev}
                            style={{
                                position: "absolute",
                                left: "-60px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                background: "none",
                                border: "none",
                                color: "white",
                                fontSize: "64px",
                                cursor: "pointer",
                                zIndex: 1001,
                            }}
                        >
                            &#8249;
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={handleNext}
                            style={{
                                position: "absolute",
                                right: "-60px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                background: "none",
                                border: "none",
                                color: "white",
                                fontSize: "64px",
                                cursor: "pointer",
                                zIndex: 1001,
                            }}
                        >
                            &#8250;
                        </button>

                        {/* Close Icon */}
                        <button
                            onClick={handleClosePopup}
                            style={{
                                position: "absolute",
                                top: "-10px",
                                right: "-50px",
                                background: "none",
                                border: "none",
                                color: "white",
                                fontSize: "44px",
                                cursor: "pointer",
                                zIndex: 1001,
                            }}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Image;
