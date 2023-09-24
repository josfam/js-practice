/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const watch = {
    color: "black",
    material: "resin",
    type: "digital",
    battery: {
        percentage: 100,
        lifetimeYears: 10,
    },
}

const stylus = {
    color: "white",
    material: "plastic",
    tip: {
        detachable: true,
        replaceable: true,
        material: "plastic",
    },
    battery: {
        rechargeable: true,
        userReplaceable: false,
    },
}

const room = {
    shelf: {
        items: {
            bottle: {
                color: "red",
                material: "plastic",
                disassembleable: true,
                alsoAVuvuzela: true,
            },
            desiccant: {
                brand: "Dry Caddy",
                expired: true,
            },
            lens: {
                brand: "Nikon",
                hasLensCover: true,
                mmRange: "70-300",
                color: "black",
                zoomLevel: 100,
                setZoomLevel: function (level) {
                    this.zoomLevel = level;
                },
            },
        },
        color: "white",
    }
}

// lens experimental
console.log("Your", room.shelf.items.lens.brand, "lens is on the", room.shelf.color ,"shelf.");
console.log("Zoom level is currently", room.shelf.items.lens.zoomLevel, "%");
room.shelf.items.lens.setZoomLevel(150);
console.log("Zoom level is currently", room.shelf.items.lens.zoomLevel, "%");
