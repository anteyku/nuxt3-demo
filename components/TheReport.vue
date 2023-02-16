<template>
    <div class="report">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="report__title">
                        ЗВlТИ
                    </div>
                </div>
            </div>
            <div class="row report__blocks">
                <div class="col-lg-3">
                    <div class="report__blocks__mini-block">
                        <iframe height="170" src="https://www.youtube.com/embed/Wh2ZnBphRE4" title="СПЯЩИЕ! Страшные Истории На Ночь" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">

    @roboto: 'Roboto', sans-serif;
    @inter: 'Inter', sans-serif;

    .report{
        margin-top: 157px;

        .report__blocks{
            margin-top: 80px;
            .report__blocks__mini-block{
                iframe{
                    display: block;
                    margin: 0 auto;
                }
            }
        }
        .report__title{
            text-align: center;
            font-family: @inter;
            font-weight: 700;
            font-size: 36px;
            position: relative;

            &:before{
                width: 228px;
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                height: 3px;
                background-color:#0091EA;
                bottom: -27px;
            }
        }
    }

</style>