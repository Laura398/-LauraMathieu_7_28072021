<template>
<div class="footer">
    <p>© Groupomania, 2021</p>
</div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
.footer {
    position: absolute;
    background-color: #071833;
    bottom: 0;
    height: 50px;
    color: #f7eaea;
    margin-bottom: 0;
    margin-left: -16px;
    padding: 30px;
    width: 100%;
}

@media all and (max-width: 768px){ 
    .footer {
        width: 100%;
    }
}
</style>