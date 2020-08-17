<template>
    <div style="padding: 20px;">
<!--        <a-row :gutter="[8,8]">-->
<!--            <a-col :span="6">-->
<!--                <a-card hoverable style="width: 300px; background-color: #c1b3b8" :bordered="false">-->
<!--                    <img slot="cover" alt="cover image" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597079313997&di=a32154d23b74c75fad42c3643380f403&imgtype=0&src=http%3A%2F%2Fimg30.ddimg.cn%2F66%2F8%2F495660-1_o.jpg"/>-->
<!--                    <a-card-meta title="寻枪" description="This is the description" />-->
<!--                </a-card>-->
<!--            </a-col>-->
<!--        </a-row>-->
        <a-list
                rowKey="id"
                :grid="{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}"
                :dataSource="movies"
                >
            <a-list-item slot="renderItem" slot-scope="movies">
                <template v-if="!movies || movies.id === undefined">
                    <a-button class="new-btn" type="dashed">
                        <a-icon type="plus"/>
                        新增电影
                    </a-button>
                </template>
                <template v-else>
                    <a-card :hoverable="true">
                        <img slot="cover" :src="movies.cover_image_url"/>
                        <a-card-meta>
                            <a slot="title" :href="movies.url">{{movies.title}}</a>
                            <div class="meta-content" slot="description">{{movies.description}}</div>
                        </a-card-meta>
                    </a-card>
                </template>
            </a-list-item>
        </a-list>
        <template>
            <a-pagination :current="current" :total="total" :pageSize="pages" @change='onChange'/>
        </template>
    </div>
</template>

<script>
    export default {
        name: "MovieList",
        data() {
            return {
                movies: [],
                current: 1,
                total: 0,
                pages: 3
            }
        },
        methods: {
            request() {
                const path = `/movie/list?current=${this.current}&size=${this.pages}`;
                this.$axios.get(path)
                    .then((resp) => {
                        this.movies = resp['data']['records'];
                        this.total = resp['data']['total'];
                        this.pages = resp['data']['pages'];
                    })
            },
            onChange(current) {
                // TODO onChange有BUG，pages是5的时候有问题
                this.current = current;
                this.request();
            }
        },
        created() {
            this.request();
        }
    }
</script>

<style scoped>

    /deep/ .meta-content {
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        height: 64px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin-bottom: 1em;
    }

    .new-btn {
        background-color: #fff;
        border-radius: 2px;
        width: 100%;
        height: 188px;
    }
</style>
