import vine from "@vinejs/vine";

const schema = vine.object({
    email : vine.string().email(),
    password : vine.string().minLength(6),// .confirmed()
    
    
})

const validatorLogin = vine.compile(schema);
export default validatorLogin