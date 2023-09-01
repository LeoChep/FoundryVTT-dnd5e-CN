export default function DialogWindow() {
    let d = new Dialog({
        title: "jiajiajiajaijai",
        content: `
        <div style="text-align: justify;">
            不负责任的汉化，爱来自5etool中文站
        </div>
        `,
        buttons: {
            one: {
                icon: '<i class="fas fa-clipboard-list"></i>',
                label: "OK",
            }
        },

    },{ width: 550});
    d.render(true);
}
