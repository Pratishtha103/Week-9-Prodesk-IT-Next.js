"use client"

export default function FavoriteButton({ isFavorite, onToggle, disabled = false, }){
    return(
        <button
            onClick = {onToggle}
            disabled={disabled}
            className =" 
                text-2xl
                hover:scale-125
                transition-transform"
        >
            {isFavorite? "♥" : "♡"}
        </button>
    );
}