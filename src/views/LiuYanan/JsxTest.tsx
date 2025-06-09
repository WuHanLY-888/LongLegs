// src/components/Hello.tsx
import { defineComponent, ref } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
    props: {
        name: String
    },
    setup(props) {
        const count = ref(0)
        console.log({ count: count.value })
        const addCount = () => {
            count.value += 1
        }

        return () => (
            <>
                <h1>hello, {props.name}</h1>
                <div>{count.value}</div>
                <ElButton type="primary" onClick={addCount}>
                    增加数据 {count.value}
                </ElButton>
            </>
        )
    }
})
