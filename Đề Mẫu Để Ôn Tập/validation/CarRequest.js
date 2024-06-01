import vine from "@vinejs/vine";

const schema = vine.object({
    name : vine.string().minLength(1),
    ven : vine.string().minLength(1),
    brand : vine.string().minLength(1),
    description : vine.string().minLength(1),
    dom : vine.date({
        formats : ['YYYY-MM-DD']
    }),
})

const validatorCar = vine.compile(schema);
export default validatorCar