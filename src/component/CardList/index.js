import React, {Component} from 'react'
import ListViewCard from '../ListViewCard'
import GridLargeCard from '../GridLargeCard'
import GridSmallCard from '../GridSmallCard'

class CardList extends Component {
    render(){
        return(
            <div className="tab-content">
                <div id="gridLarge" className="tab-pane fade in active">
                    <div className="row">
                        <div className="col-sm-4">
                            <GridLargeCard />
                        </div>
                        <div className="col-sm-4">
                            <GridLargeCard />
                        </div>
                        <div className="col-sm-4">
                            <GridLargeCard />
                        </div>

                    </div>
                </div>
                <div id="list" className="tab-pane fade  ">
                    <div className="row">
                        <div className="col-sm-6">
                            <ListViewCard />
                        </div>
                        <div className="col-sm-6">
                            <ListViewCard />
                        </div>
                        <div className="col-sm-6">
                            <ListViewCard />
                        </div>
                        <div className="col-sm-6">
                            <ListViewCard />
                        </div>
                        <div className="col-sm-6">
                            <ListViewCard />
                        </div>
                        <div className="col-sm-6">
                            <ListViewCard />
                        </div>
                    </div>

                </div>

                <div id="gridSmall" className="tab-pane fade">
                    <div className="col-sm-3">
                        <GridSmallCard />
                    </div>
                    <div className="col-sm-3">
                        <GridSmallCard />
                    </div>
                    <div className="col-sm-3">
                        <GridSmallCard />
                    </div>
                    <div className="col-sm-3">
                        <GridSmallCard />
                    </div>
                </div>
            </div>
        )
    }
}

export default CardList