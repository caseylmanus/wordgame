//
//  GameScene.swift
//  wordplay
//
//  Created by Casey Manus on 2/17/15.
//  Copyright (c) 2015 ActiveRefuge. All rights reserved.
//

import SpriteKit

class GameScene: SKScene {
    override func didMoveToView(view: SKView) {
        /* Setup your scene here */
        //let myLabel = SKLabelNode(fontNamed:"Ariel")
        //myLabel.text = "Hello, World!";
        //myLabel.fontSize = 65;
        //myLabel.position = CGPoint(x:CGRectGetMidX(self.frame), y:CGRectGetMidY(self.frame));
        ship = SKSpriteNode(imageNamed: "Spaceship")
        ship!.xScale = 0.2
        ship!.yScale = 0.2
        ship!.position = CGPoint(x:CGRectGetMidX(self.frame), y:CGRectGetMidY(self.frame))
        
        self.addChild(ship!)
    }
    var ship:SKSpriteNode? = nil
    override func touchesMoved(touches: NSSet, withEvent event: UIEvent) {
        for touch: AnyObject in touches {
            let location = touch.locationInNode(self)
            let action = SKAction.moveTo(location, duration: 0)
            ship?.runAction(action)
                   }
    }
    
    override func touchesBegan(touches: NSSet, withEvent event: UIEvent) {
        /* Called when a touch begins */
        
        for touch: AnyObject in touches {
            let laser = SKShapeNode(rectOfSize: CGSize(width:2, height:15));
            laser.fillColor = SKColor.whiteColor()
            laser.position = self.ship!.position
            self.addChild(laser)
            let fire = SKAction.moveTo(CGPoint(x: laser.position.x, y: self.size.height + 15), duration: 1.0)
            laser.runAction(fire)

        }
    
    }
   
    override func update(currentTime: CFTimeInterval) {
        /* Called before each frame is rendered */
    }
}
