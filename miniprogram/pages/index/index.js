"use strict";
var app = getApp();
Page({
    data: {
        recommendList: [
            { title: '北京平谷大红桃', des: '空气里都是甜甜的红桃香气', num: 500, score: 500, price: 80, pic: '../../static/home/recommend_1.png' },
            { title: '北京平谷大红桃', des: '空气里都是甜甜的红桃香气', num: 500, score: 500, price: 80, pic: '../../static/home/recommend_1.png' },
            { title: '北京平谷大红桃', des: '空气里都是甜甜的红桃香气', num: 500, score: 500, price: 80, pic: '../../static/home/recommend_1.png' },
            { title: '北京平谷大红桃', des: '空气里都是甜甜的红桃香气', num: 50, score: 500, price: 80, pic: '../../static/home/recommend_1.png' }
        ],
        pastList: [
            { title: '寻乌脐橙', date: '8.1-8.20', pic: '../../static/home/past-img-1.png' },
            { title: '乌江草莓', date: '8.1-8.20', pic: '../../static/home/past-img-2.png' },
            { title: '浙江乌梅', date: '8.1-8.20', pic: '../../static/home/past-img-3.png' },
            { title: '广西猕猴桃', date: '8.1-8.20', pic: '../../static/home/past-img-4.png' },
            { title: '湖南葡萄', date: '8.1-8.20', pic: '../../static/home/past-img-5.png' },
            { title: '广东荔枝', date: '8.1-8.20', pic: '../../static/home/past-img-6.png' }
        ],
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    onLoad: function () {
        var _this = this;
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            });
        }
        else if (this.data.canIUse) {
            app.userInfoReadyCallback = function (res) {
                _this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true,
                });
            };
        }
        else {
            wx.getUserInfo({
                success: function (res) {
                    app.globalData.userInfo = res.userInfo;
                    _this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true,
                    });
                },
            });
        }
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFaEMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osYUFBYSxFQUFFO1lBQ2IsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLG1DQUFtQyxFQUFFO1lBQ3BILEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxtQ0FBbUMsRUFBRTtZQUNwSCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsbUNBQW1DLEVBQUU7WUFDcEgsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLG1DQUFtQyxFQUFFO1NBQ3BIO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLGtDQUFrQyxFQUFFO1lBQzVFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxrQ0FBa0MsRUFBRTtZQUM1RSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsa0NBQWtDLEVBQUU7WUFDNUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLGtDQUFrQyxFQUFFO1lBQzdFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxrQ0FBa0MsRUFBRTtZQUM1RSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsa0NBQWtDLEVBQUU7U0FDN0U7UUFDRCxRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO0tBQ3BEO0lBRUQsV0FBVztRQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUFOLGlCQTJCQztRQTFCQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDakMsV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1NBQ0g7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRzVCLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxVQUFBLEdBQUc7Z0JBQzdCLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO29CQUN0QixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2xCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsV0FBVyxZQUFDLENBQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDojrflj5blupTnlKjlrp7kvotcbmNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgcmVjb21tZW5kTGlzdDogW1xuICAgICAgeyB0aXRsZTogJ+WMl+S6rOW5s+iwt+Wkp+e6ouahgycsIGRlczogJ+epuuawlOmHjOmDveaYr+eUnOeUnOeahOe6ouahg+mmmeawlCcsIG51bTogNTAwLCBzY29yZTogNTAwLCBwcmljZTogODAsIHBpYzogJy4uLy4uL3N0YXRpYy9ob21lL3JlY29tbWVuZF8xLnBuZycgfSxcbiAgICAgIHsgdGl0bGU6ICfljJfkuqzlubPosLflpKfnuqLmoYMnLCBkZXM6ICfnqbrmsJTph4zpg73mmK/nlJznlJznmoTnuqLmoYPpppnmsJQnLCBudW06IDUwMCwgc2NvcmU6IDUwMCwgcHJpY2U6IDgwLCBwaWM6ICcuLi8uLi9zdGF0aWMvaG9tZS9yZWNvbW1lbmRfMS5wbmcnIH0sXG4gICAgICB7IHRpdGxlOiAn5YyX5Lqs5bmz6LC35aSn57qi5qGDJywgZGVzOiAn56m65rCU6YeM6YO95piv55Sc55Sc55qE57qi5qGD6aaZ5rCUJywgbnVtOiA1MDAsIHNjb3JlOiA1MDAsIHByaWNlOiA4MCwgcGljOiAnLi4vLi4vc3RhdGljL2hvbWUvcmVjb21tZW5kXzEucG5nJyB9LFxuICAgICAgeyB0aXRsZTogJ+WMl+S6rOW5s+iwt+Wkp+e6ouahgycsIGRlczogJ+epuuawlOmHjOmDveaYr+eUnOeUnOeahOe6ouahg+mmmeawlCcsIG51bTogNTAsIHNjb3JlOiA1MDAsIHByaWNlOiA4MCwgcGljOiAnLi4vLi4vc3RhdGljL2hvbWUvcmVjb21tZW5kXzEucG5nJyB9XG4gICAgXSxcbiAgICBwYXN0TGlzdDogW1xuICAgICAgeyB0aXRsZTogJ+Wvu+S5jOiEkOapmScsIGRhdGU6ICc4LjEtOC4yMCcsIHBpYzogJy4uLy4uL3N0YXRpYy9ob21lL3Bhc3QtaW1nLTEucG5nJyB9LFxuICAgICAgeyB0aXRsZTogJ+S5jOaxn+iNieiOkycsIGRhdGU6ICc4LjEtOC4yMCcsIHBpYzogJy4uLy4uL3N0YXRpYy9ob21lL3Bhc3QtaW1nLTIucG5nJyB9LFxuICAgICAgeyB0aXRsZTogJ+a1meaxn+S5jOaihScsIGRhdGU6ICc4LjEtOC4yMCcsIHBpYzogJy4uLy4uL3N0YXRpYy9ob21lL3Bhc3QtaW1nLTMucG5nJyB9LFxuICAgICAgeyB0aXRsZTogJ+W5v+ilv+eMleeMtOahgycsIGRhdGU6ICc4LjEtOC4yMCcsIHBpYzogJy4uLy4uL3N0YXRpYy9ob21lL3Bhc3QtaW1nLTQucG5nJyB9LFxuICAgICAgeyB0aXRsZTogJ+a5luWNl+iRoeiQhCcsIGRhdGU6ICc4LjEtOC4yMCcsIHBpYzogJy4uLy4uL3N0YXRpYy9ob21lL3Bhc3QtaW1nLTUucG5nJyB9LFxuICAgICAgeyB0aXRsZTogJ+W5v+S4nOiNlOaenScsIGRhdGU6ICc4LjEtOC4yMCcsIHBpYzogJy4uLy4uL3N0YXRpYy9ob21lL3Bhc3QtaW1nLTYucG5nJyB9XG4gICAgXSxcbiAgICB1c2VySW5mbzoge30sXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgfSxcbiAgLy8g5LqL5Lu25aSE55CG5Ye95pWwXG4gIGJpbmRWaWV3VGFwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJyxcbiAgICB9KVxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxuICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgfSlcbiAgfSxcbn0pXG4iXX0=