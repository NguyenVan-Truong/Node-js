import vine from "@vinejs/vine";

const schema = vine.object({
    name : vine.string().minLength(6).maxLength(225),
    price : vine.number(),
    description : vine.string(),
    image : vine.string(),
})
const productValidate = vine.compile(schema)
export default productValidate